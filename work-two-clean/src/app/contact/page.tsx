"use client";
import { useState } from "react";
import Notification from "@/components/Notification";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        topic: "",
        subTopic: "",
        queryTitle: "",
        orderNumber: "",
        productUrl: "",
        message: "",
        attachments: [] as File[]
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        message: string;
        type: "success" | "error";
        isVisible: boolean;
    }>({
        message: "",
        type: "success",
        isVisible: false
    });

    // Topic options
    const topics = [
        { value: "", label: "(Please select a topic)" },
        { value: "order", label: "Order Issues" },
        { value: "product", label: "Product Questions" },
        { value: "shipping", label: "Shipping & Delivery" },
        { value: "returns", label: "Returns & Refunds" },
        { value: "technical", label: "Technical Support" },
        { value: "general", label: "General Inquiry" }
    ];

    // Sub-topic options based on main topic
    const getSubTopics = (topic: string) => {
        const subTopicsMap: { [key: string]: { value: string; label: string }[] } = {
            order: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "order-status", label: "Order Status" },
                { value: "order-modification", label: "Order Modification" },
                { value: "order-cancellation", label: "Order Cancellation" },
                { value: "payment-issues", label: "Payment Issues" }
            ],
            product: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "product-info", label: "Product Information" },
                { value: "size-guide", label: "Size Guide" },
                { value: "availability", label: "Product Availability" },
                { value: "defects", label: "Product Defects" }
            ],
            shipping: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "tracking", label: "Order Tracking" },
                { value: "delivery-time", label: "Delivery Time" },
                { value: "shipping-costs", label: "Shipping Costs" },
                { value: "damaged-package", label: "Damaged Package" }
            ],
            returns: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "return-process", label: "Return Process" },
                { value: "refund-status", label: "Refund Status" },
                { value: "exchange", label: "Exchange Request" },
                { value: "return-policy", label: "Return Policy" }
            ],
            technical: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "website-issues", label: "Website Issues" },
                { value: "account-problems", label: "Account Problems" },
                { value: "mobile-app", label: "Mobile App Issues" },
                { value: "login-issues", label: "Login Issues" }
            ],
            general: [
                { value: "", label: "(Please select a sub topic)" },
                { value: "feedback", label: "Feedback" },
                { value: "partnership", label: "Partnership Inquiry" },
                { value: "press", label: "Press Inquiry" },
                { value: "other", label: "Other" }
            ]
        };

        return subTopicsMap[topic] || [{ value: "", label: "(Please select a sub topic)" }];
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Reset sub-topic when topic changes
        if (name === "topic") {
            setFormData(prev => ({
                ...prev,
                topic: value,
                subTopic: ""
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setFormData(prev => ({
                ...prev,
                attachments: [...prev.attachments, ...filesArray]
            }));
        }
    };

    const removeFile = (index: number) => {
        setFormData(prev => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index)
        }));
    };

    const showNotification = (message: string, type: "success" | "error") => {
        setNotification({
            message,
            type,
            isVisible: true
        });
    };

    const hideNotification = () => {
        setNotification(prev => ({
            ...prev,
            isVisible: false
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare form data for submission
            const submitData = {
                ...formData,
                attachments: formData.attachments.map(file => ({
                    name: file.name,
                    size: file.size,
                    type: file.type
                }))
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData),
            });

            const result = await response.json();

            if (result.success) {
                showNotification(result.message, "success");

                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    telephone: "",
                    topic: "",
                    subTopic: "",
                    queryTitle: "",
                    orderNumber: "",
                    productUrl: "",
                    message: "",
                    attachments: []
                });
            } else {
                showNotification(`Error: ${result.error}`, "error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            showNotification("There was an error submitting your form. Please try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-2/3 mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative font-inter text-thin text-black">
            {/* TITLE */}
            <div className="flex items-center justify-center pt-12 pb-2 text-center">
                <div className="w-2/3">
                    <h1 className="text-2xl font-bodoni">
                        Contact Us
                    </h1>
                    <p className="mt-2 text-xs font-inter text-thin leading-6">
                        Get in touch with our support team.
                    </p>
                </div>

            </div>

            {/* CONTACT FORM */}
            <div className="max-w-2xl mx-auto py-8 font-inter text-thin text-xs placeholder:font-inter placeholder:text-thin placeholder:text-xs">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs text-gray-900 ">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-900 ">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs text-gray-900">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-900">
                                Telephone
                            </label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleInputChange}
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    {/* Topic Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs text-gray-900">
                                Topic
                            </label>
                            <select
                                name="topic"
                                value={formData.topic}
                                onChange={handleInputChange}
                                required
                                className="option:font-inter option:text-thin option:text-xs w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent"
                            >
                                {topics.map((topic) => (
                                    <option key={topic.value} value={topic.value}>
                                        {topic.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-900">
                                Sub Topic
                            </label>
                            <select
                                name="subTopic"
                                value={formData.subTopic}
                                onChange={handleInputChange}
                                required
                                disabled={!formData.topic}
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent disabled:opacity-50"
                            >
                                {getSubTopics(formData.topic).map((subTopic) => (
                                    <option key={subTopic.value} value={subTopic.value}>
                                        {subTopic.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Query Title */}
                    <div>
                        <label className="block text-xs text-gray-900">
                            Please give a title to your query
                        </label>
                        <input
                            type="text"
                            name="queryTitle"
                            value={formData.queryTitle}
                            onChange={handleInputChange}
                            required
                            className="placeholder:font-inter placeholder:text-thin placeholder:text-xs w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                            placeholder="Enter a title for your query"
                        />
                    </div>

                    {/* Order and Product Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs text-gray-900">
                                Order Number
                            </label>
                            <input
                                type="text"
                                name="orderNumber"
                                value={formData.orderNumber}
                                onChange={handleInputChange}
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter order number (if applicable)"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-900">
                                Product URL
                            </label>
                            <input
                                type="url"
                                name="productUrl"
                                value={formData.productUrl}
                                onChange={handleInputChange}
                                className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
                                placeholder="Enter product URL (if applicable)"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-xs text-gray-900">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-0 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                            placeholder="Please describe your query in detail..."
                        />
                    </div>

                    {/* File Upload */}
                    <div className="flex items-center gap-4">
                        <label className="block text-xs text-gray-900">
                            Attachments
                        </label>
                        <div className="border border-dashed border-gray-300 w-full p-1 text-center">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                                accept="image/*,.pdf,.doc,.docx"
                            />
                            <label
                                htmlFor="file-upload"
                                className="items-center justify-center cursor-pointer text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <div className="flex justify-center items-center gap-2">
                                    <svg className="h-7 w-7 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="text-xs text-gray-500">
                                        <span>Click to upload</span> or drag and drop
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Display uploaded files */}
                        {formData.attachments.length > 0 && (
                            <div className="mt-4 space-y-2">
                                <p className="text-xs text-gray-900">Uploaded files:</p>
                                {formData.attachments.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50">
                                        <span className="text-xs text-gray-600">{file.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="text-red-500 hover:text-red-700 text-xs"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="uppercase w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                        >
                            {isSubmitting ? "Sending..." : "Submit Message"}
                        </button>
                    </div>
                </form>
            </div>
            <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={hideNotification}
            />
        </div>
    );
};

export default ContactPage; 