
import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon, PlayIcon, ExclamationIcon } from './icons';

interface CodeDisplayProps {
    code: string;
    isLoading: boolean;
    error: string | null;
    onRunTest: () => void;
}

const CodePlaceholder: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <p className="text-lg">Your generated Playwright script will appear here.</p>
        <p className="text-sm mt-1">Describe a test scenario above and click "Generate Script".</p>
    </div>
);

const LoadingState: React.FC = () => (
     <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <svg className="animate-spin h-12 w-12 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg mt-4">Generating your script...</p>
        <p className="text-sm text-gray-500">This may take a few moments.</p>
    </div>
);

const ErrorState: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex flex-col items-center justify-center h-full text-red-400 bg-red-900/20 rounded-md p-4">
        <ExclamationIcon />
        <p className="text-lg font-semibold mt-2">Error Generating Script</p>
        <p className="text-sm text-center mt-1">{message}</p>
    </div>
);

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, isLoading, error, onRunTest }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        if (code) {
            navigator.clipboard.writeText(code);
            setCopied(true);
        }
    };

    const renderContent = () => {
        if (isLoading) {
            return <LoadingState />;
        }
        if (error) {
            return <ErrorState message={error} />;
        }
        if (!code) {
            return <CodePlaceholder />;
        }
        return (
            <pre className="text-sm whitespace-pre-wrap overflow-x-auto">
                <code className="language-javascript">{code}</code>
            </pre>
        );
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col flex-grow">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-gray-200">Generated Code</h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onRunTest}
                        disabled={!code || isLoading}
                        className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
                    >
                        <PlayIcon />
                        Run Test
                    </button>
                    <button
                        onClick={handleCopy}
                        disabled={!code || isLoading}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
                    >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="p-6 flex-grow bg-gray-900/50 rounded-b-lg overflow-auto" style={{ minHeight: '300px' }}>
                {renderContent()}
            </div>
        </div>
    );
};
