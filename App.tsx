
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { CodeDisplay } from './components/CodeDisplay';
import { SelectorLibraryDisplay } from './components/SelectorLibraryDisplay';
import { generatePlaywrightScript } from './services/geminiService';
import { SELECTOR_LIBRARY } from './constants/selectors';

const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('Go to the login page, fill in the username with "testuser" and password with "password123", then click the login button. After that, navigate to the "Tasks" page.');
    const [generatedCode, setGeneratedCode] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async (currentPrompt: string) => {
        if (!currentPrompt || isLoading) return;

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
    }, [isLoading]);

    const handleRunTest = () => {
        alert("Test execution is not available in this environment. Please copy the code and run it in your local Playwright setup.");
    };

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
