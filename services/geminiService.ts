
import { GoogleGenAI, Type } from "@google/genai";
import type { Selector } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        code: {
            type: Type.STRING,
            description: "The complete Playwright test script as a single string.",
        },
    },
};

export const generatePlaywrightScript = async (userPrompt: string, selectors: Selector[]): Promise<string> => {
    const model = 'gemini-2.5-flash';

    const systemInstruction = `
You are an expert Playwright test script generator. Your task is to convert a user's natural language description of a test scenario into a complete and executable Playwright test script.

**Application & Page Object Model (POM) Context:**
You are generating tests for a complex Appian application. This application is built using a well-defined Page Object Model (POM) with a factory pattern ('TempoFieldFactory') for handling UI components. Understanding this structure is key to interpreting the user's intent correctly.

The main architectural components you should be aware of are:
- **Main Page Objects**: These define the primary areas of the application. Key pages include 'TempoLogin' for authentication, 'TempoMenu' for navigation, 'SitePage' for site-specific content, and 'TempoReport' for viewing reports.
- **Action Components**: For executing workflow actions ('TempoAction').
- **Record Components**: For all data-related operations, including viewing records ('TempoRecordView'), interacting with grids ('TempoRecordGridColumn', 'TempoRecordGridNavigation'), and filtering ('TempoRecordTypeUserFilter').
- **News & Social Components**: For interacting with the social feed ('TempoNewsItem', 'TempoNewsSendPost', 'TempoNewsSendKudos').
- **Field & Form Components**: A rich library of form elements including 'TempoTextField', 'TempoDropdownField', 'TempoGrid', 'TempoCheckboxField', 'TempoPickerField' (for autocomplete), 'TempoDateField', and 'TempoButton'.

This context means a user saying "filter the grid" refers to a 'Record Component', and "post on the feed" refers to a 'News & Social Component'. Use this understanding to select the most appropriate selectors.

**Rules for Script Generation:**
1.  **Complete Script:** Generate a complete, runnable Playwright test file. You MUST include the necessary imports: \`import { test, expect } from '@playwright/test';\`.
2.  **Test Block:** The entire test logic MUST be wrapped within a \`test('...', async ({ page }) => { ... });\` block.
3.  **Selector Exclusivity:** This is the most important rule. You **MUST ONLY** use the selectors provided in the JSON 'Selector Library' below. Do not invent selectors, use CSS selectors, or create your own locators. Every locator you use must come from the provided library.
4.  **Action Mapping:** Map user actions (e.g., "click", "fill", "type", "go to", "navigate", "select", "verify") to the correct Playwright commands (\`page.goto()\`, \`locator.click()\`, \`locator.fill()\`, \`locator.selectOption()\`, \`expect(locator).toBeVisible()\`).
5.  **Parameterized Selectors:** For selectors where 'isParameterized' is true, the selector string contains placeholders like \`{0}\`, \`{1}\`, etc., which you must replace with values extracted from the user's prompt. Format these by replacing the placeholder including the braces. For example, if the prompt is "click the 'Submit' button" and the selector is \`//button[contains(normalize-space(),{0})]\`, the generated code should be \`page.locator(\"//button[contains(normalize-space(),'Submit')]\")\`. If a selector needs two parameters like \`section {0} field {1}\`, and the prompt is "in the 'User Details' section, fill the 'First Name' field", you must populate both parameters.
6.  **Async/Await:** All Playwright actions are asynchronous. You MUST use \`await\` for every action (e.g., \`await page.locator(...).click();\`).
7.  **JSON Output:** The final output MUST be a valid JSON object that conforms to the provided schema, with a single key "code" containing the entire generated script as a single string.
`;

    const fullPrompt = `
System Instruction:
${systemInstruction}

Selector Library:
${JSON.stringify(selectors, null, 2)}

User's Test Scenario:
"${userPrompt}"
`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: fullPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.1,
                thinkingConfig: { thinkingBudget: 4086 },
            },
        });

        const jsonString = response.text.trim();
        const result = JSON.parse(jsonString);

        if (result && typeof result.code === 'string') {
            // A simple post-processing step to clean up placeholders if the model miss-formats them
            return result.code.replace(/\{(\d+)\}/g, '{}');
        } else {
            throw new Error("Invalid response format from API. Expected a JSON object with a 'code' property.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate test script. Please check the console for more details.");
    }
};
