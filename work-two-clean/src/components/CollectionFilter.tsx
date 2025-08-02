"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCollectionData } from '@/hooks/useCollectionData';

interface Option {
    value: string;
    label: string;
    colorCode?: string;
}

interface FilterDropdownProps {
    name: string;
    options: Option[];
    placeholder?: string;
    className?: string;
    multiple?: boolean;
    onChange: (e: { target: { name: string; value: string | string[] } }) => void;
}

const FilterDropdown = ({ name, options, placeholder, className, multiple = false, onChange }: FilterDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option: Option) => {
        if (multiple) {
            const isSelected = selectedOptions.some(selected => selected.value === option.value);
            let newSelectedOptions: Option[];

            if (isSelected) {
                newSelectedOptions = selectedOptions.filter(selected => selected.value !== option.value);
            } else {
                newSelectedOptions = [...selectedOptions, option];
            }

            setSelectedOptions(newSelectedOptions);
            onChange({
                target: {
                    name,
                    value: newSelectedOptions.map(opt => opt.value)
                }
            });
        } else {
            setSelectedOptions([option]);
            onChange({
                target: {
                    name,
                    value: option.value
                }
            });
        }
    };

    const getDisplayContent = () => {
        if (selectedOptions.length === 0) {
            return <span className="truncate">{placeholder}</span>;
        }

        if (multiple) {
            if (selectedOptions.length === 1) {
                const option = selectedOptions[0];
                return (
                    <div className="flex items-center gap-2">
                        {option.colorCode && (
                            <div
                                className="w-3 h-3 border border-gray-300"
                                style={{ backgroundColor: option.colorCode }}
                            ></div>
                        )}
                        <span className="truncate">{option.label.toUpperCase()}</span>
                    </div>
                );
            }
            if (selectedOptions.length > 1) {
                return (
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {selectedOptions.slice(0, 3).map((option, index) => (
                                option.colorCode && (
                                    <div
                                        key={index}
                                        className="w-3 h-3 border border-gray-300"
                                        style={{ backgroundColor: option.colorCode }}
                                    ></div>
                                )
                            ))}
                        </div>
                        <span className="truncate">{`${selectedOptions.length} SELECTED`}</span>
                    </div>
                );
            }
            return <span className="truncate">{`${selectedOptions.length} SELECTED`}</span>;
        }

        const option = selectedOptions[0];
        return (
            <div className="flex items-center gap-2">
                {option.colorCode && (
                    <div
                        className="w-3 h-3 border border-gray-300"
                        style={{ backgroundColor: option.colorCode }}
                    ></div>
                )}
                <span className="truncate">{option.label.toUpperCase()}</span>
            </div>
        );
    };

    const isOptionSelected = (option: Option) => {
        return selectedOptions.some(selected => selected.value === option.value);
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left font-inter text-thin pt-2 px-1 text-xxs bg-white border-none outline-none focus:outline-none focus:ring-0 flex items-center justify-between"
            >
                {getDisplayContent()}
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 z-20 bg-white border border-gray-200 shadow-lg max-h-60 max-w-60 overflow-y-auto scrollbar-hide">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="px-3 py-2 text-xxs font-inter text-thin hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center gap-2"
                        >
                            <div className="w-3 h-3 border border-gray-300 flex items-center justify-center">
                                {isOptionSelected(option) && (
                                    option.colorCode ? (
                                        <div
                                            className="w-2 h-2"
                                            style={{ backgroundColor: option.colorCode }}
                                        ></div>
                                    ) : (
                                        <div className="w-2 h-2 bg-black"></div>
                                    )
                                )}
                            </div>
                            <span>{option.label.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const CollectionFilter = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const { collections, colors, sizes, loading, error } = useCollectionData();

    const handleFilterChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | { target: { name: string; value: string | string[] } }
    ) => {
        const { name, value } = e.target;

        // Handle category filter differently - navigate to collection URL
        if (name === 'cat') {
            if (Array.isArray(value) && value.length > 0) {
                // Navigate to the first selected collection
                replace(`/collections/${value[0]}`);
            } else if (typeof value === 'string' && value) {
                // Navigate to the selected collection
                replace(`/collections/${value}`);
            } else {
                // Navigate to all products
                replace('/collections');
            }
            return;
        }

        // Handle other filters with URL parameters
        const params = new URLSearchParams(searchParams);

        if (Array.isArray(value)) {
            // Handle multiple selections
            if (value.length === 0) {
                params.delete(name);
            } else {
                params.set(name, value.join(','));
            }
        } else {
            // Handle single values
            if (value === '') {
                params.delete(name);
            } else {
                params.set(name, value);
            }
        }

        replace(`${pathname}?${params.toString()}`);
    };

    const sortOptions = [
        { value: "", label: "SORT BY" },
        { value: "asc price", label: "PRICE (LOW TO HIGH)" },
        { value: "desc price", label: "PRICE (HIGH TO LOW)" },
        { value: "asc lastUpdated", label: "NEWEST" },
        { value: "desc lastUpdated", label: "OLDEST" }
    ];

    if (loading) {
        return (
            <div className="flex">
                <div className="flex gap-3 flex-wrap">
                    <div className="font-times-new-roman-italic py-2 px-2 text-sm">
                        Filter By
                    </div>
                    <div className="animate-pulse">
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <div className="pt-4 text-xs font-times-new-roman-italic text-thin">~</div>
                    <div className="animate-pulse">
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-6 w-24 bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-600 text-sm">
                {error}
            </div>
        );
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-3 flex-wrap">
                <div
                    className="font-times-new-roman-italic py-2 px-2 text-sm"
                >
                    Filter By
                </div>
                <input
                    type="text"
                    name="min"
                    placeholder="MIN PRICE"
                    autoComplete="off"
                    spellCheck="false"
                    autoCorrect="off"
                    autoCapitalize="off"
                    className="text-xxs pl-1 w-20 font-inter text-thin border-b border-black pb-1 placeholder:text-black focus:outline-none focus:ring-0"
                    onChange={handleFilterChange}
                />
                <div className="pt-4 text-xs font-times-new-roman-italic text-thin">~</div>
                <input
                    type="text"
                    name="max"
                    placeholder="MAX PRICE"
                    autoComplete="off"
                    spellCheck="false"
                    autoCorrect="off"
                    autoCapitalize="off"
                    className="text-xxs pl-1 w-20 font-inter text-thin border-b border-black pb-1 placeholder:text-black focus:outline-none focus:ring-0"
                    onChange={handleFilterChange}
                />

                <FilterDropdown
                    name="cat"
                    options={collections}
                    placeholder="CATEGORY"
                    className="w-32"
                    multiple={false}
                    onChange={handleFilterChange}
                />

                <FilterDropdown
                    name="size"
                    options={sizes}
                    placeholder="SIZE"
                    className="w-16"
                    multiple={true}
                    onChange={handleFilterChange}
                />

                <FilterDropdown
                    name="color"
                    options={colors}
                    placeholder="COLOR"
                    className="w-32"
                    multiple={true}
                    onChange={handleFilterChange}
                />

                <FilterDropdown
                    name="sort"
                    options={sortOptions}
                    placeholder="SORT BY"
                    className="w-32"
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
};

export default CollectionFilter;