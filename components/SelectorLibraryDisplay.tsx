import React, { useState, useMemo } from 'react';
import type { Selector } from '../types';
import { ChevronDownIcon } from './icons';

interface SelectorLibraryDisplayProps {
    selectors: Selector[];
}

const getCategoryForSelector = (selectorName: string): string => {
    const lower = selectorName.toLowerCase();
    if (lower.includes('login') || lower.includes('menu') || lower.includes('site') || lower.includes('report') || lower.includes('authenticationpage')) return 'Main Pages';
    if (lower.includes('action') && !lower.includes('recordaction')) return 'Action Components';
    if (lower.includes('record')) return 'Record Components';
    if (lower.includes('news') || lower.includes('social') || lower.includes('post') || lower.includes('kudos') || lower.includes('task')) return 'News & Social Components';
    if (lower.includes('grid') || lower.includes('field') || lower.includes('button') || lower.includes('picker') || lower.includes('checkbox') || lower.includes('dropdown') || lower.includes('chart') || lower.includes('milestone') || lower.includes('link') || lower.includes('tag') || lower.includes('stamp') || lower.includes('signature') || lower.includes('card') || lower.includes('box') || lower.includes('section')) return 'Field & Form Components';
    return 'General & Utility';
};

const CATEGORY_ORDER = [
    'Main Pages',
    'Action Components',
    'Record Components',
    'News & Social Components',
    'Field & Form Components',
    'General & Utility',
];

const SelectorItem: React.FC<{ selector: Selector }> = ({ selector }) => (
    <div className="p-3 bg-gray-900/50 rounded-md border border-gray-700">
        <p className="font-mono text-sm text-cyan-400">{selector.name}</p>
        <p className="text-xs text-gray-400 mt-1">{selector.description}</p>
        {selector.isParameterized && (
            <span className="mt-2 inline-block bg-yellow-900/50 text-yellow-300 text-xs font-medium px-2 py-0.5 rounded">
                Parameterized
            </span>
        )}
    </div>
);

export const SelectorLibraryDisplay: React.FC<SelectorLibraryDisplayProps> = ({ selectors }) => {
    const [openCategory, setOpenCategory] = useState<string | null>(CATEGORY_ORDER[0]);

    const categorizedSelectors = useMemo(() => {
        const groups: Record<string, Selector[]> = {};
        selectors.forEach(selector => {
            const category = getCategoryForSelector(selector.name);
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(selector);
        });
        return groups;
    }, [selectors]);

    const toggleCategory = (category: string) => {
        setOpenCategory(prev => (prev === category ? null : category));
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
            <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 p-6">
                Selector Library
            </h2>
            <div className="flex-grow overflow-y-auto pr-2 pl-6 pb-6 pt-4">
                <div className="space-y-2">
                    {CATEGORY_ORDER.map(category => {
                        const items = categorizedSelectors[category];
                        if (!items || items.length === 0) return null;

                        const isOpen = openCategory === category;

                        return (
                            <div key={category}>
                                <button
                                    onClick={() => toggleCategory(category)}
                                    className="w-full flex justify-between items-center text-left p-3 bg-gray-900/70 hover:bg-gray-700/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                >
                                    <span className="font-semibold text-gray-300">{category} ({items.length})</span>
                                    <ChevronDownIcon className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpen && (
                                    <div className="pt-2 pl-4 border-l-2 border-gray-700 ml-3 mt-1">
                                         <div className="space-y-3">
                                            {items.map(selector => (
                                                <SelectorItem key={selector.name} selector={selector} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};