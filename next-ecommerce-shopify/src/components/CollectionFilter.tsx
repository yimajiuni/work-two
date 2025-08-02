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

const FilterDropdown = ({ name, options, placeholder, className, multiple = false, onChange, isOpen, setIsOpen, selectedOptions, isOptionSelected }: FilterDropdownProps & {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    selectedOptions: Option[];
    isOptionSelected: (option: Option) => boolean;
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);






    const getDisplayContent = () => {
        if (!selectedOptions || selectedOptions.length === 0) {
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
                        {/* <div className="flex gap-1">
                            {selectedOptions.slice(0, 3).map((option, index) => (
                                option.colorCode && (
                                    <div
                                        key={index}
                                        className="w-3 h-3 border border-gray-300"
                                        style={{ backgroundColor: option.colorCode }}
                                    ></div>
                                )
                            ))}
                        </div> */}
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



    return (
        <div className={`relative w-max ${className}`} ref={dropdownRef}>


            <button
                type="button"
                data-filter-button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left font-inter text-thin pt-2 px-1 text-xxs bg-white border-none outline-none focus:outline-none focus:ring-0 flex items-center"
            >
                {getDisplayContent()}
                <p className={`z-30 ml-1 mb-0 text-xs transition-all duration-300 text-left bg-white px-0.3 py-0.1 rounded ${isOpen ? 'rotate-0 scale-[200%] translate-y-6' : '-rotate-45 scale-100'}`}
                >▩</p>
            </button>

            {/* Spacer to push content down when dropdown is open */}
            <div className={`transition-all duration-300 ${isOpen ? 'h-2 sm:h-0 sm:mb-4' : 'h-1'} mb-2 `}></div>
        </div>

    );
};

const CollectionFilter = ({ onDropdownStateChange }: { onDropdownStateChange?: (isOpen: boolean) => void }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // State for selected options in shared dropdown
    const [selectedOptions, setSelectedOptions] = useState<{
        cat: Option[];
        size: Option[];
        color: Option[];
        sort: Option[];
    }>({
        cat: [],
        size: [],
        color: [],
        sort: []
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Only close if clicking outside the dropdown and not on a filter button
                const target = event.target as Element;
                const isFilterButton = target.closest('[data-filter-button]');
                if (!isFilterButton) {
                    setActiveDropdown(null);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Notify parent when dropdown state changes
    useEffect(() => {
        if (onDropdownStateChange) {
            onDropdownStateChange(!!activeDropdown);
        }
    }, [activeDropdown, onDropdownStateChange]);

    const { collections, colors, sizes, loading, error } = useCollectionData();

    const isOptionSelected = (filterName: string, option: Option) => {
        return selectedOptions[filterName as keyof typeof selectedOptions]?.some(selected => selected.value === option.value) || false;
    };

    const handleSharedDropdownOptionClick = (filterName: string, option: Option) => {
        const currentSelected = selectedOptions[filterName as keyof typeof selectedOptions] || [];
        let newSelectedOptions: Option[];

        // Check if this filter supports multiple selections
        const isMultiple = filterName === 'size' || filterName === 'color';

        if (isMultiple) {
            const isSelected = currentSelected.some(selected => selected.value === option.value);
            if (isSelected) {
                newSelectedOptions = currentSelected.filter(selected => selected.value !== option.value);
            } else {
                newSelectedOptions = [...currentSelected, option];
            }
        } else {
            // Single selection - replace current selection
            newSelectedOptions = [option];
            // Close dropdown for single selection filters
            setActiveDropdown(null);
        }

        // Update local state
        setSelectedOptions(prev => ({
            ...prev,
            [filterName]: newSelectedOptions
        }));

        // Call the original handleFilterChange
        handleFilterChange({
            target: {
                name: filterName,
                value: isMultiple ? newSelectedOptions.map(opt => opt.value) : option.value
            }
        });
    };

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
                    className="text-xxs pl-1 w-20 font-inter text-thin border-b border-black pb-1 placeholder:text-black focus:outline-none focus:ring-0 h-8"
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
                    className="text-xxs pl-1 w-20 font-inter text-thin border-b border-black pb-1 placeholder:text-black focus:outline-none focus:ring-0 h-8"
                    onChange={handleFilterChange}
                />
                <div className="flex">
                    <FilterDropdown
                        name="cat"
                        options={collections}
                        placeholder="CATEGORY"
                        className="w-full sm:w-12 md:w-16 lg:w-24 "
                        multiple={false}
                        onChange={handleFilterChange}
                        isOpen={activeDropdown === "cat"}
                        setIsOpen={(open) => setActiveDropdown(open ? "cat" : null)}
                        selectedOptions={selectedOptions.cat}
                        isOptionSelected={(option) => isOptionSelected("cat", option)}
                    />

                    <FilterDropdown
                        name="size"
                        options={sizes}
                        placeholder="SIZE"
                        className="w-full sm:w-12 md:w-16 lg:w-24"
                        multiple={true}
                        onChange={handleFilterChange}
                        isOpen={activeDropdown === "size"}
                        setIsOpen={(open) => setActiveDropdown(open ? "size" : null)}
                        selectedOptions={selectedOptions.size}
                        isOptionSelected={(option) => isOptionSelected("size", option)}
                    />

                    <FilterDropdown
                        name="color"
                        options={colors}
                        placeholder="COLOR"
                        className="w-full sm:w-12 md:w-16 lg:w-24"
                        multiple={true}
                        onChange={handleFilterChange}
                        isOpen={activeDropdown === "color"}
                        setIsOpen={(open) => setActiveDropdown(open ? "color" : null)}
                        selectedOptions={selectedOptions.color}
                        isOptionSelected={(option) => isOptionSelected("color", option)}
                    />

                    <FilterDropdown
                        name="sort"
                        options={sortOptions}
                        placeholder="SORT BY"
                        className="w-full sm:w-12 md:w-16 lg:w-24"
                        onChange={handleFilterChange}
                        isOpen={activeDropdown === "sort"}
                        setIsOpen={(open) => setActiveDropdown(open ? "sort" : null)}
                        selectedOptions={selectedOptions.sort}
                        isOptionSelected={(option) => isOptionSelected("sort", option)}
                    />
                </div>
            </div>


            {/* Shared dropdown container */}
            {activeDropdown && (
                <div ref={dropdownRef} className="absolute top-full top-20 left-1/2 transform -translate-x-1/2 w-[95vw] px-3 z-20 transition-all duration-300 max-h-60 opacity-100">
                    <div className="bg-white border border-gray-900 shadow-lg overflow-y-auto scrollbar-hide p-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {activeDropdown === "cat" && collections.map((option, index) => {
                                const isSelected = selectedOptions.cat.some(selected => selected.value === option.value);
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleSharedDropdownOptionClick("cat", option)}
                                        className="text-xxs font-inter text-thin hover:bg-gray-200 cursor-pointer border-r border-gray-200 flex items-center gap-1"
                                    >
                                        <div className="w-3 h-3 border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            {isSelected && <div className="w-2 h-2 bg-black"></div>}
                                        </div>
                                        <span>{option.label.toUpperCase()}</span>
                                    </div>
                                );
                            })}
                            {activeDropdown === "size" && sizes.map((option, index) => {
                                const isSelected = selectedOptions.size.some(selected => selected.value === option.value);
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleSharedDropdownOptionClick("size", option)}
                                        className="text-xxs font-inter text-thin hover:bg-gray-200 cursor-pointer border-r border-gray-200 flex items-center gap-1"
                                    >
                                        <div className="w-3 h-3 border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            {isSelected && <div className="w-2 h-2 bg-black"></div>}
                                        </div>
                                        <span>{option.label.toUpperCase()}</span>
                                    </div>
                                );
                            })}
                            {activeDropdown === "color" && colors.map((option, index) => {
                                const isSelected = selectedOptions.color.some(selected => selected.value === option.value);
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleSharedDropdownOptionClick("color", option)}
                                        className="text-xxs font-inter text-thin hover:bg-gray-200 cursor-pointer border-r border-gray-200 flex items-center gap-1"
                                    >
                                        <div className="w-3 h-3 border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            {isSelected && option.colorCode && (
                                                <div
                                                    className="w-2 h-2"
                                                    style={{ backgroundColor: option.colorCode }}
                                                ></div>
                                            )}
                                        </div>
                                        <span>{option.label.toUpperCase()}</span>
                                    </div>
                                );
                            })}
                            {activeDropdown === "sort" && sortOptions.map((option, index) => {
                                const isSelected = selectedOptions.sort.some(selected => selected.value === option.value);
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleSharedDropdownOptionClick("sort", option)}
                                        className="text-xxs font-inter text-thin hover:bg-gray-200 cursor-pointer border-r border-gray-200 flex items-center gap-1"
                                    >
                                        <div className="w-3 h-3 border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            {isSelected && <div className="w-2 h-2 bg-black"></div>}
                                        </div>
                                        <span>{option.label.toUpperCase()}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Bottom kanji square symbol */}
                        <div className="absolute bottom-[40%] left-2 flex items-center gap-1">
                            <div className="h-2 border-[0.5px] border-black bg-white bg-cover transform scale-[200%]">
                                <div className="text-center text-[5px] font-ming">選ぶ</div>
                            </div>
                        </div>
                        {/* Bottom square wa symbol */}
                        <div className="absolute -bottom-1 left-20 flex">
                            <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                        </div>
                    </div>
                </div>
            )}
            {/* Spacer to push content down when dropdown is open 
            <div className={`transition-all duration-300 ${activeDropdown ? 'h-20 sm:h-4 mb-6 sm:mb-4' : 'h-0'} mb-2`}></div>*/}

        </div>
    );
};

export default CollectionFilter;