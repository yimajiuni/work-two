import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import CountUp from 'react-countup';

// Shared chrome — colors, layout, motion
const sharedClasses = {
    container: "text-center",
    metricContainer: "text-blue-500 whitespace-nowrap",
    animatedContainer: "font-bold text-blue-500 transition-all duration-500",
    animatedContainerPulse: "font-bold text-blue-500 transition-all duration-500 animate-pulse",
    finalContainer: "font-semibold text-blue-600 transition-all duration-500",
    marginRight: "mr-1",
    marginLeft: "ml-1",
};

// Size maps — Layout passes `size` (e.g. beige); pink keeps default
const sizeMaps = {
    default: {
        label: "text-lg font-semibold text-blue-500 whitespace-nowrap ",
        textUnit: "text-3xl",
        textValue: "text-7xl",
    },
    beige: {
        label: "mb-1 text-[10px] leading-tight sm:text-sm md:text-lg font-semibold text-blue-500 whitespace-nowrap",
        textUnit: "text-[12px] sm:text-lg md:text-3xl",
        textValue: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl whitespace-nowrap",
    },
};

const AnimatedMetric = ({
    label,
    labelKey,
    startValue,
    endValue,
    duration = 1.5,
    delay = 0,
    className = "",
    shouldStart = false,
    size = "default",
}) => {
    const classes = {
        ...sharedClasses,
        ...(sizeMaps[size] ?? sizeMaps.default),
    };
    const [isVisible, setIsVisible] = useState(false);
    const [showEndValue, setShowEndValue] = useState(false);
    const metricRef = useRef(null);

    // Memoize the parseValue function to prevent unnecessary re-computations
    const parseValue = useCallback((value, labelKey = '') => {
        if (typeof value === 'string') {
            // Handle different formats
            if (value.includes('%')) {
                // Determine prefix based on the specific metric key
                if (labelKey === 'conversionRate') {
                    // Conversion rate: + prefix for improvement
                    return { number: value.replace('%', ''), unit: '%', prefix: '+', position: 'right' };
                } else if (labelKey === 'mobileBounce') {
                    // Mobile bounce: - prefix for reduction
                    return { number: value.replace('%', ''), unit: '%', prefix: '-', position: 'right' };
                } else {
                    // Other percentage metrics: no prefix
                    return { number: value.replace('%', ''), unit: '%', prefix: '', position: 'right' };
                }
            }
            if (value.includes('sec')) {
                return { number: value.replace('sec', ''), unit: 'sec', prefix: '', position: 'right' };
            }
            if (value.includes('rank')) {
                // Organic Traffic: unit on left, prefix, then number
                return { number: value.replace('rank ', ''), unit: 'rank', prefix: '+', position: 'left' };
            }
            if (value.includes('hours')) {
                // Operation Hours: prefix, number, unit on right
                return { number: value.replace(' hours', ''), unit: 'hours', prefix: '-', position: 'right' };
            }
            if (value.includes('$')) {
                const cleanNumber = value.replace('$', '').replace(/,/g, '');
                // Server Cost: unit on left, prefix, then number
                return { number: parseInt(cleanNumber).toLocaleString(), unit: '$', prefix: '-', position: 'prefix-first' };
            }
            if (value.includes('万円')) {
                const cleanNumber = value.replace('万円', '');
                return { number: parseInt(cleanNumber).toLocaleString(), unit: '万円', prefix: '-', position: 'right' };
            }
        }
        return { number: value, unit: '', prefix: '', position: 'right' };
    }, []);

    // Memoize parsed values to prevent unnecessary re-renders
    const endParsed = useMemo(() => parseValue(endValue, labelKey), [endValue, labelKey, parseValue]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (metricRef.current) {
            observer.observe(metricRef.current);
        }

        return () => {
            if (metricRef.current) {
                observer.unobserve(metricRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setShowEndValue(true), 500);
        }
    }, [isVisible]);

    // Extract numeric value for CountUp
    const getNumericValue = (value) => {
        if (typeof value === 'string') {
            const cleanValue = value.replace(/[^0-9.-]/g, '');
            return parseFloat(cleanValue) || 0;
        }
        return parseFloat(value) || 0;
    };

    const startNum = getNumericValue(startValue);
    const endNum = getNumericValue(endValue);

    return (
        <div ref={metricRef} className={`${classes.container} ${className}`}>
            <h4 className={classes.label}>
                {label}
            </h4>
            <div className={classes.metricContainer}>
                {!showEndValue ? (
                    <div className={classes.animatedContainer}>
                        {endParsed.position === 'left' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.unit}</span>
                        )}
                        {endParsed.prefix && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.prefix}</span>
                        )}
                        {endParsed.position === 'prefix-first' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.unit}</span>
                        )}

                        <span className={classes.textValue}>
                            {shouldStart && isVisible ? (
                                <CountUp
                                    start={startNum}
                                    end={endNum}
                                    duration={duration}
                                    delay={delay}
                                    useEasing={true}
                                    separator=","
                                    decimals={endParsed.unit === '%' ? 1 : 0}
                                />
                            ) : (
                                startNum
                            )}
                        </span>

                        {endParsed.position === 'right' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginLeft}`}>{endParsed.unit}</span>
                        )}
                    </div>
                ) : (
                    <div className={classes.finalContainer}>
                        {endParsed.position === 'left' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.unit}</span>
                        )}
                        {endParsed.prefix && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.prefix}</span>
                        )}
                        {endParsed.position === 'prefix-first' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginRight}`}>{endParsed.unit}</span>
                        )}
                        <span className={classes.textValue}>{endParsed.number}</span>

                        {endParsed.position === 'right' && endParsed.unit && (
                            <span className={`${classes.textUnit} ${classes.marginLeft}`}>{endParsed.unit}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(AnimatedMetric);
