
import React, { useState } from 'react';
import { LoadingSpinnerIcon } from './icons';

interface PromptInputProps {
    initialPrompt: string;
    onSubmit: (prompt: string) => void;
    isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ initialPrompt, onSubmit, isLoading }) => {
    const [prompt, setPrompt] = useState(initialPrompt);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(prompt);
    };

    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Describe Your Test Scenario</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Login with user 'admin' and password 'pass123', then verify the dashboard header is visible."
                    className="w-full h-40 p-4 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow duration-200 resize-none"
                    disabled={isLoading}
                />
                <div className="mt-4 flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading || !prompt.trim()}
                        className="flex items-center justify-center px-6 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
                    >
                        {isLoading ? (
                            <>
                                <LoadingSpinnerIcon />
                                Generating...
                            </>
                        ) : (
                            'Generate Script'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};
