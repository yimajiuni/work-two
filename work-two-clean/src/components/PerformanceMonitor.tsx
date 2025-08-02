"use client";
import { useEffect, useState } from "react";

interface PerformanceMetrics {
    pageLoadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
}

const PerformanceMonitor = () => {
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show in development mode
        if (process.env.NODE_ENV === 'development') {
            setIsVisible(true);
        }

        const measurePerformance = () => {
            if (typeof window !== 'undefined' && 'performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                const paintEntries = performance.getEntriesByType('paint');
                const layoutShiftEntries = performance.getEntriesByType('layout-shift');

                const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
                const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
                const cls = layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0);

                setMetrics({
                    pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
                    firstContentfulPaint: fcp ? fcp.startTime : 0,
                    largestContentfulPaint: lcp ? lcp.startTime : 0,
                    cumulativeLayoutShift: cls,
                    firstInputDelay: 0 // Would need to be measured with event listeners
                });
            }
        };

        // Measure after page load
        if (document.readyState === 'complete') {
            measurePerformance();
        } else {
            window.addEventListener('load', measurePerformance);
        }

        return () => {
            window.removeEventListener('load', measurePerformance);
        };
    }, []);

    if (!isVisible || !metrics) return null;

    const getPerformanceColor = (value: number, threshold: number) => {
        if (value <= threshold) return 'text-green-600';
        if (value <= threshold * 1.5) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="fixed bottom-6 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-sm">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                    <span className="text-gray-600">Page Load:</span>
                    <span className={getPerformanceColor(metrics.pageLoadTime, 1000)}>
                        {metrics.pageLoadTime.toFixed(0)}ms
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">FCP:</span>
                    <span className={getPerformanceColor(metrics.firstContentfulPaint, 1800)}>
                        {metrics.firstContentfulPaint.toFixed(0)}ms
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">LCP:</span>
                    <span className={getPerformanceColor(metrics.largestContentfulPaint, 2500)}>
                        {metrics.largestContentfulPaint.toFixed(0)}ms
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">CLS:</span>
                    <span className={getPerformanceColor(metrics.cumulativeLayoutShift, 0.1)}>
                        {metrics.cumulativeLayoutShift.toFixed(3)}
                    </span>
                </div>
            </div>

            <div className="mt-3 pt-2 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Good</span>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Needs Improvement</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Poor</span>
                </div>
            </div>
        </div>
    );
};

export default PerformanceMonitor; 