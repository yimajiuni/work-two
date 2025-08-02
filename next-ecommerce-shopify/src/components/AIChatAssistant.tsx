"use client";
import { useState, useRef, useEffect } from "react";
import { useShopifyClient } from "@/context/shopifyContext";

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const AIChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm your AI shopping assistant. How can I help you today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const shopifyClient = useShopifyClient();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Show assistant 2 seconds after page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Handle scroll-based visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Only show if we're past the 2-second delay AND not within top 30px
            if (shouldShow && scrollPosition > 30) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [shouldShow]);

    const generateAIResponse = async (userMessage: string): Promise<string> => {
        // Simulate AI response - in real implementation, connect to OpenAI/Claude API
        const responses = [
            "I'd be happy to help you find what you're looking for!",
            "Let me search our inventory for that item.",
            "That's a great question! Let me check our product details.",
            "I can help you with product recommendations based on your needs.",
            "Would you like me to show you similar products?",
            "I can assist with order tracking and customer support.",
            "Let me help you find the best deals and promotions."
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const aiResponse = await generateAIResponse(inputValue);

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: aiResponse,
                sender: 'ai',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error generating AI response:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm sorry, I'm having trouble responding right now. Please try again later.",
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <div className={`fixed bottom-14 right-2 md:bottom-12 z-50 transition-all duration-500 ease-in-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-white text-black p-4 rounded-full border-[0.5px] border-black  shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-visible"
                    aria-label="Open chat assistant"
                >
                    {/* Yima Flower SVG Background */}
                    <div className="absolute inset-0 -left-4 -top-4 flex items-center justify-center z-20">
                        <svg
                            viewBox="0 0 100 100"
                            className="w-20 h-20"
                            style={{
                                backgroundImage: 'url(/yima-flower.svg)',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                            <image
                                href="/yima-flower.svg"
                                width="100"
                                height="100"
                                className="object-contain w-full h-full"
                                preserveAspectRatio="xMidYMid meet"
                            />
                        </svg>
                    </div>

                    {isOpen ? (
                        <svg className="w-8 h-8 relative z-10 fill-black hover:fill-white transition-colors duration-300" viewBox="0 0 83 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.19237 68.5771L15.0201 46.8277L30.9418 62.7494L9.19237 68.5771Z" fill="currentColor" />
                            <path d="M83 35.5C83 55.1061 64.4198 71 41.5 71C18.5802 71 0 55.1061 0 35.5C0 15.8939 18.5802 0 41.5 0C64.4198 0 83 15.8939 83 35.5Z" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 relative z-10 fill-black hover:fill-white transition-colors duration-300" viewBox="0 0 83 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.19237 68.5771L15.0201 46.8277L30.9418 62.7494L9.19237 68.5771Z" fill="currentColor" />
                            <path d="M83 35.5C83 55.1061 64.4198 71 41.5 71C18.5802 71 0 55.1061 0 35.5C0 15.8939 18.5802 0 41.5 0C64.4198 0 83 15.8939 83 35.5Z" fill="currentColor" />
                        </svg>
                    )}
                </button>


            </div>

            {/* Chat Window */}
            <div className={`fixed bottom-6 right-6 w-96 h-96 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 flex flex-col z-50 transition-all duration-500 ease-in-out transform ${isOpen
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}>

                {/* Header */}
                <div className="bg-black text-white p-4 rounded-t-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-times-new-roman-italic">AI Shopping Assistant</h3>
                                <p className="text-xs text-white font-inter text-thin">Online • Ready to help</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg transition-all duration-200 ${message.sender === 'user'
                                    ? 'bg-black text-white hover:bg-black'
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                <p className="text-sm font-inter text-thin text-black">{message.text}</p>
                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-black' : 'text-gray-500'
                                    }`}>
                                    {message.timestamp.toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:font-times-new-roman-italic"
                            disabled={isTyping}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isTyping}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-black disabled:opacity-50 disabled:cursor-default transition-all duration-200 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChatAssistant; 