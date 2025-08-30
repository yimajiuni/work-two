import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const useCountAnimation = (startValue, endValue, duration = 4000, delay = 0) => {
    const [currentValue, setCurrentValue] = useState(parseFloat(startValue) || 0);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationRef = useRef(null);
    const startTimeRef = useRef(null);

    // Memoize parsed values to avoid repeated parsing
    const startNum = useMemo(() => parseFloat(startValue) || 0, [startValue]);
    const endNum = useMemo(() => parseFloat(endValue) || 0, [endValue]);

    // Memoize the easing function calculation
    const calculateEasing = useCallback((progress) => {
        return 1 - Math.pow(1 - progress, 3); // Slower easing function for more gradual animation
    }, []);

    useEffect(() => {
        const startAnimation = () => {
            setIsAnimating(true);
            startTimeRef.current = Date.now();

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTimeRef.current;
                const progress = Math.min(elapsed / duration, 1);

                const easeOutQuart = calculateEasing(progress);
                const current = startNum + (endNum - startNum) * easeOutQuart;
                setCurrentValue(current);

                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                } else {
                    setCurrentValue(endNum);
                    setIsAnimating(false);
                }
            };

            animationRef.current = requestAnimationFrame(animate);
        };

        const timer = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timer);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [startNum, endNum, duration, delay, calculateEasing]);

    // Memoize the formatNumber function to prevent unnecessary re-computations
    const formatNumber = useCallback((value) => {
        try {
            const numValue = parseFloat(value) || 0;

            if (typeof startValue === 'string' && startValue.includes('%')) {
                return `${numValue.toFixed(1)}%`;
            }
            if (typeof startValue === 'string' && startValue.includes('sec')) {
                return `${numValue.toFixed(1)}sec`;
            }
            if (typeof startValue === 'string' && startValue.includes('rank')) {
                return `rank ${Math.round(numValue)}`;
            }
            if (typeof startValue === 'string' && startValue.includes('hours')) {
                return `${Math.round(numValue)} hours`;
            }
            if (typeof startValue === 'string' && startValue.includes('$')) {
                return `$${Math.round(numValue).toLocaleString()}`;
            }
            if (typeof startValue === 'string' && startValue.includes('万円')) {
                return `${Math.round(numValue)}万円`;
            }
            return Math.round(numValue);
        } catch (error) {
            console.warn('Error formatting number:', error);
            return startValue; // Fallback to original value
        }
    }, [startValue]);

    // Memoize the formatted current value
    const formattedCurrentValue = useMemo(() => formatNumber(currentValue), [currentValue, formatNumber]);

    return {
        currentValue: formattedCurrentValue,
        isAnimating
    };
};

export default useCountAnimation; 