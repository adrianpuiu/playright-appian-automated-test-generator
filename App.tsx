import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { CodeDisplay } from './components/CodeDisplay';
import { SelectorLibraryDisplay } from './components/SelectorLibraryDisplay';
import { generatePlaywrightScript } from './services/geminiService';
import type { Selector } from './types';
import { LoadingSpinnerIcon, ExclamationIcon } from './components/icons';

const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('Go to the login page, fill in the username with "testuser" and password with "password123", then click the login button. After that, navigate to the "Tasks" page.');
    const [generatedCode, setGeneratedCode] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectorsData, setSelectorsData] = useState<Record<string, any> | null>(null);
    const [isSelectorsLoading, setIsSelectorsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSelectors = async () => {
            try {
                // Fetch the selector data from the correct file with the complete list
                const response = await fetch('./appian-playwright-selectors.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSelectorsData(data);
            } catch (e) {
                console.error("Failed to load selectors:", e);
                setError(e instanceof Error ? e.message : "Could not load the selector library. Please check the console for more details.");
            } finally {
                setIsSelectorsLoading(false);
            }
        };
        fetchSelectors();
    }, []);

    const SELECTOR_LIBRARY = useMemo((): Selector[] => {
        if (!selectorsData) return [];

        // New parsing logic for the flat `appian-playwright-selectors.json` structure
        const parsedSelectors: Selector[] = [];
        
        for (const key in selectorsData) {
            const item = (selectorsData as any)[key];
            if (item && typeof item.playwright_selector === 'string' && typeof item.description === 'string') {
                const selector = item.playwright_selector;
                // Check for placeholders like {0}, {1}, etc.
                const isParameterized = /\{\d+\}/.test(selector);
                
                parsedSelectors.push({
                    name: key,
                    selector: selector,
                    description: item.description,
                    isParameterized: isParameterized,
                });
            }
        }
        
        // Sorting alphabetically by name for consistent order
        parsedSelectors.sort((a, b) => a.name.localeCompare(b.name));

        return parsedSelectors;
    }, [selectorsData]);


    const handleGenerate = useCallback(async (currentPrompt: string) => {
        if (!currentPrompt || isLoading || !SELECTOR_LIBRARY.length) return;

        setIsLoading(true);
        setError(null);
        setGeneratedCode('');

        try {
            const code = await generatePlaywrightScript(currentPrompt, SELECTOR_LIBRARY);
            setGeneratedCode(code);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, SELECTOR_LIBRARY]);

    const handleRunTest = () => {
        alert("Test execution is not available in this environment. Please copy the code and run it in your local Playwright setup.");
    };

    if (isSelectorsLoading) {
        return (
            <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col items-center justify-center">
                <LoadingSpinnerIcon />
                <p className="mt-4 text-lg">Loading Selector Library...</p>
            </div>
        );
    }

    if (error || !selectorsData || SELECTOR_LIBRARY.length === 0) {
        return (
            <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center text-red-400 bg-red-900/20 rounded-lg p-8 shadow-2xl">
                    <ExclamationIcon />
                    <p className="text-xl font-semibold mt-4">Fatal Error</p>
                    <p className="text-md text-center mt-2">{error || "Could not load or parse the selector library."}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 xl:col-span-3">
                    <SelectorLibraryDisplay selectors={SELECTOR_LIBRARY} />
                </div>
                <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8">
                    <PromptInput
                        initialPrompt={prompt}
                        onSubmit={handleGenerate}
                        isLoading={isLoading}
                    />
                    <CodeDisplay
                        code={generatedCode}
                        isLoading={isLoading}
                        error={error}
                        onRunTest={handleRunTest}
                    />
                </div>
            </main>
        </div>
    );
};

export default App;