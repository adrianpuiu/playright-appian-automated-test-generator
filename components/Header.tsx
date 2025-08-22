
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-2xl font-bold text-cyan-400 tracking-wider">
                    Automated Playwright Test Generator
                </h1>
                <p className="text-gray-400 mt-1">
                    Generate test scripts from natural language using your predefined selector library.
                </p>
            </div>
        </header>
    );
};
