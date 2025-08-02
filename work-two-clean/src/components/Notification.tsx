"use client";
import { useState, useEffect } from "react";

interface NotificationProps {
    message: string;
    type: "success" | "error";
    isVisible: boolean;
    onClose: () => void;
}

const Notification = ({ message, type, isVisible, onClose }: NotificationProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
    const borderColor = type === "success" ? "border-green-200" : "border-red-200";
    const textColor = type === "success" ? "text-green-800" : "text-red-800";
    const iconColor = type === "success" ? "text-green-400" : "text-red-400";

    return (
        <div className={`fixed top-24 right-4 z-50 max-w-sm w-full ${bgColor} border ${borderColor} rounded-lg p-4 shadow-lg`}>
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    {type === "success" ? (
                        <svg className={`h-5 w-5 ${iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className={`h-5 w-5 ${iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    )}
                </div>
                <div className="ml-3 flex-1">
                    <p className={`text-sm font-medium ${textColor}`}>
                        {message}
                    </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <button
                        onClick={onClose}
                        className={`inline-flex ${textColor} hover:${textColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type === "success" ? "green" : "red"}-500`}
                    >
                        <span className="sr-only">Close</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification; 