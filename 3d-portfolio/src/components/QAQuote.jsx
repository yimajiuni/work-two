import React, { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Document, Page, Text, View, StyleSheet, pdf, Font } from '@react-pdf/renderer';
import { I18nextProvider } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Consolidated Tailwind classes for better performance
const classes = {
    // Modal overlay
    modalOverlay: "fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4",

    // Main container
    mainContainer: "bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-gray-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto",

    // Header
    header: "flex justify-between items-center mb-6",
    headerTitle: "text-2xl font-bold text-gray-500",
    closeButton: "text-white hover:text-gray-500 text-2xl pt-5",

    // Progress bar
    progressContainer: "mb-6",
    progressText: "flex justify-between text-sm text-gray-500 mb-2",
    progressBar: "w-full bg-white/20 rounded-full h-2",
    progressFill: "bg-blue-500 h-2 rounded-full transition-all duration-300",

    // Question completion dots
    dotsContainer: "flex gap-2 mt-3",
    dot: "w-3 h-3 rounded-full transition-all duration-300",
    dotCurrent: "bg-blue-400 scale-125",
    dotAnswered: "bg-pink-300",
    dotUnanswered: "bg-white/60",

    // Form elements
    form: "mb-8",
    questionTitle: "text-xl font-semibold text-gray-500 mb-4",
    required: "text-red-400 ml-2",

    // Input styles
    input: "w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-gray-500",
    inputContact: "w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400",
    textarea: "w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-gray-500",

    // Radio and checkbox styles
    radioContainer: "space-y-3",
    radioItem: "flex items-center space-x-3 cursor-pointer",
    radioInput: "w-4 h-4 text-blue-600",
    radioLabel: "text-gray-500",

    // Grid styles
    gridContainer: "space-y-4",
    gridInstruction: "text-gray-500 text-sm mb-4",
    grid: "grid grid-cols-4 sm:grid-cols-7 gap-3",
    gridButton: "p-2 sm:p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:scale-105 relative min-h-[60px] sm:min-h-[80px] flex items-center justify-center",
    gridButtonSelected: "bg-pink-300/50 border-white/50 text-gray-500 hover:bg-white/20 hover:border-white/40",
    gridButtonUnselected: "bg-pink-300/50 border-white/50 text-gray-500 hover:bg-white/20 hover:border-white/40",
    gridButtonText: "text-xs text-center leading-tight font-medium break-words hyphens-auto max-w-full",
    gridPriority: "absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold",

    // Priority colors
    priorityColors: {
        red: "bg-red-500/80 border-red-400 text-white shadow-lg",
        pink: "bg-pink-500/80 border-pink-400 text-white shadow-lg",
        fuchsia: "bg-fuchsia-500/80 border-fuchsia-400 text-white shadow-lg",
        violet: "bg-violet-500/80 border-violet-400 text-white shadow-lg",
        purple: "bg-purple-500/80 border-purple-400 text-white shadow-lg"
    },
    priorityBadgeColors: {
        red: "bg-red-600 text-white",
        pink: "bg-pink-600 text-white",
        fuchsia: "bg-fuchsia-600 text-white",
        violet: "bg-violet-600 text-white",
        purple: "bg-purple-600 text-white"
    },

    // Priority order display
    priorityOrder: "mt-4 p-3 bg-white/10 rounded-lg border border-white/20",
    priorityOrderText: "text-gray-500 text-sm mb-2",
    priorityOrderList: "flex flex-wrap gap-2",
    priorityBadge: "px-3 py-1 rounded-full text-xs font-medium text-white",

    // Contact form
    contactContainer: "space-y-4",
    contactField: "block text-white mb-2",
    contactError: "text-red-400 text-sm",

    // Validation error
    validationError: "mt-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg",
    validationErrorText: "text-red-400 text-sm",

    // Navigation buttons
    navContainer: "flex justify-between",
    button: "px-6 py-3 rounded-lg font-semibold transition-colors",
    buttonDisabled: "bg-pink-300/40 text-white/60 cursor-not-allowed",
    buttonPrevious: "bg-pink-300/80 text-white",
    buttonNext: "bg-blue-500 text-white hover:bg-blue-600",
    buttonSubmit: "bg-blue-500 text-white hover:bg-blue-600",
    buttonSubmitting: "bg-pink-300/40 text-white cursor-not-allowed",

    // Success modal
    successOverlay: "fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
    successContainer: "border border-gray-500 bg-pink-300/50 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-md w-full text-center",
    successTitle: "text-2xl font-bold text-gray-500 mb-4",
    successMessage: "text-gray-500 mb-6",
    successSubMessage: "text-gray-500 text-sm mb-6",
    successButtons: "flex gap-3 justify-center",
    successButtonPrimary: "px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors",
    successButtonSecondary: "px-6 py-3 bg-pink-300/40 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
};

// PDF Styles
const pdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    question: {
        fontSize: 14,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 10,
    },
    footer: {
        fontSize: 10,
        marginTop: 30,
        textAlign: 'center',
        color: '#666',
    },
});

// Japanese font styles (using Helvetica for reliability)
const japanesePdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'NotoSansJP',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    question: {
        fontSize: 14,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 10,
    },
    footer: {
        fontSize: 10,
        marginTop: 30,
        textAlign: 'center',
        color: '#666',
    },
});

const QAQuote = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationError, setValidationError] = useState(''); // Add validation error state

    // Register fonts for PDF generation - use only Helvetica for reliability
    useEffect(() => {
        fetch('/fonts/NotoSansJP-Regular.ttf')
            .catch(err => console.error('Font fetch failed', err));

        try {
            // ✅ No need to register Helvetica — built-in
            // Register Japanese font
            Font.register({
                family: 'NotoSansJP',
                fonts: [
                    { src: '/fonts/NotoSansJP-Bold.ttf', fontWeight: 'bold' },
                ],
            });
        } catch (error) {
            console.error('❌ Font registration failed:', error);
        }
    }, []);


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    // Function to filter questions based on conditions
    const getFilteredQuestions = () => {
        return qaFlow.filter(question => {
            if (!question.condition) return true; // Show questions without conditions

            const { field, value } = question.condition;
            const fieldValue = formData[field];

            return fieldValue === value;
        });
    };

    // Q&A Flow Configuration - Now uses translations
    const qaFlow = useMemo(() => [
        {
            id: 'projectType',
            question: t('service.qaForm.questions.projectType.question'),
            type: 'select',
            options: [
                { value: 'ecommerce', label: t('service.qaForm.questions.projectType.options.ecommerce') },
                { value: 'corporate', label: t('service.qaForm.questions.projectType.options.corporate') },
                { value: 'landingpage', label: t('service.qaForm.questions.projectType.options.landingpage') },
                { value: 'webapp', label: t('service.qaForm.questions.projectType.options.webapp') },
                { value: 'other', label: t('service.qaForm.questions.projectType.options.other') }
            ]
        },
        {
            id: 'projectScale',
            question: t('service.qaForm.questions.projectScale.question'),
            type: 'select',
            options: [
                { value: 'small', label: t('service.qaForm.questions.projectScale.options.small') },
                { value: 'medium', label: t('service.qaForm.questions.projectScale.options.medium') },
                { value: 'large', label: t('service.qaForm.questions.projectScale.options.large') },
                { value: 'enterprise', label: t('service.qaForm.questions.projectScale.options.enterprise') }
            ]
        },
        {
            id: 'budget',
            question: t('service.qaForm.questions.budget.question'),
            type: 'select',
            options: [
                { value: 'under1k', label: t('service.qaForm.questions.budget.options.under1k') },
                { value: '1k-5k', label: t('service.qaForm.questions.budget.options.1k-5k') },
                { value: '5k-10k', label: t('service.qaForm.questions.budget.options.5k-10k') },
                { value: '10k+', label: t('service.qaForm.questions.budget.options.10k+') }
            ]
        },
        {
            id: 'timeline',
            question: t('service.qaForm.questions.timeline.question'),
            type: 'select',
            options: [
                { value: 'asap', label: t('service.qaForm.questions.timeline.options.asap') },
                { value: '1months-3months', label: t('service.qaForm.questions.timeline.options.1months-3months') },
                { value: '3months-6months', label: t('service.qaForm.questions.timeline.options.3months-6months') },
                { value: 'flexible', label: t('service.qaForm.questions.timeline.options.flexible') }
            ]
        },
        {
            id: 'features',
            question: t('service.qaForm.questions.features.question'),
            type: 'checkbox',
            options: [
                { value: 'responsive', label: t('service.qaForm.questions.features.options.responsive') },
                { value: 'transformation', label: t('service.qaForm.questions.features.options.transformation') },
                { value: 'seo', label: t('service.qaForm.questions.features.options.seo') },
                { value: 'cms', label: t('service.qaForm.questions.features.options.cms') },
                { value: 'payment', label: t('service.qaForm.questions.features.options.payment') },
                { value: 'analytics', label: t('service.qaForm.questions.features.options.analytics') },
                { value: 'multilingual', label: t('service.qaForm.questions.features.options.multilingual') }
            ]
        },
        {
            id: 'brandingDepth',
            question: t('service.qaForm.questions.brandingDepth.question'),
            type: 'select',
            options: [
                { value: 'detailed', label: t('service.qaForm.questions.brandingDepth.options.detailed') },
                { value: 'simple', label: t('service.qaForm.questions.brandingDepth.options.simple') }
            ]
        },
        // Conditional questions for detailed branding
        {
            id: 'brandVision',
            question: t('service.qaForm.questions.brandVision.question'),
            type: 'textarea',
            placeholder: t('service.qaForm.questions.brandVision.placeholder'),
            condition: { field: 'brandingDepth', value: 'detailed' }
        },
        {
            id: 'brandMission',
            question: t('service.qaForm.questions.brandMission.question'),
            type: 'textarea',
            placeholder: t('service.qaForm.questions.brandMission.placeholder'),
            condition: { field: 'brandingDepth', value: 'detailed' }
        },
        {
            id: 'targetAudience',
            question: t('service.qaForm.questions.targetAudience.question'),
            type: 'textarea',
            placeholder: t('service.qaForm.questions.targetAudience.placeholder'),
            condition: { field: 'brandingDepth', value: 'detailed' }
        },
        {
            id: 'brandPersonality',
            question: t('service.qaForm.questions.brandPersonality.question'),
            type: 'select',
            options: [
                { value: 'professional', label: t('service.qaForm.questions.brandPersonality.options.professional') },
                { value: 'friendly', label: t('service.qaForm.questions.brandPersonality.options.friendly') },
                { value: 'luxury', label: t('service.qaForm.questions.brandPersonality.options.luxury') },
                { value: 'innovative', label: t('service.qaForm.questions.brandPersonality.options.innovative') },
                { value: 'trustworthy', label: t('service.qaForm.questions.brandPersonality.options.trustworthy') }
            ],
            condition: { field: 'brandingDepth', value: 'detailed' }
        },
        {
            id: 'visualStyle',
            question: t('service.qaForm.questions.visualStyle.question'),
            type: 'grid',
            options: [
                // Column 1
                { value: 'masculine', label: t('service.qaForm.questions.visualStyle.options.masculine') },
                { value: 'fun', label: t('service.qaForm.questions.visualStyle.options.fun') },
                { value: 'premium', label: t('service.qaForm.questions.visualStyle.options.premium') },
                { value: 'linear', label: t('service.qaForm.questions.visualStyle.options.linear') },
                { value: 'formal', label: t('service.qaForm.questions.visualStyle.options.formal') },
                { value: 'intellectual', label: t('service.qaForm.questions.visualStyle.options.intellectual') },
                { value: 'delicate', label: t('service.qaForm.questions.visualStyle.options.delicate') },
                { value: 'monotone', label: t('service.qaForm.questions.visualStyle.options.monotone') },

                // Column 2
                { value: 'feminine', label: t('service.qaForm.questions.visualStyle.options.feminine') },
                { value: 'interesting', label: t('service.qaForm.questions.visualStyle.options.interesting') },
                { value: 'warm', label: t('service.qaForm.questions.visualStyle.options.warm') },
                { value: 'curved', label: t('service.qaForm.questions.visualStyle.options.curved') },
                { value: 'mystical', label: t('service.qaForm.questions.visualStyle.options.mystical') },
                { value: 'premium2', label: t('service.qaForm.questions.visualStyle.options.premium2') },
                { value: 'chic', label: t('service.qaForm.questions.visualStyle.options.chic') },
                { value: 'pop', label: t('service.qaForm.questions.visualStyle.options.pop') },

                // Column 3
                { value: 'childlike', label: t('service.qaForm.questions.visualStyle.options.childlike') },
                { value: 'powerful', label: t('service.qaForm.questions.visualStyle.options.powerful') },
                { value: 'decadence', label: t('service.qaForm.questions.visualStyle.options.decadence') },
                { value: 'rhythmic', label: t('service.qaForm.questions.visualStyle.options.rhythmic') },
                { value: 'trustworthy', label: t('service.qaForm.questions.visualStyle.options.trustworthy') },
                { value: 'lively', label: t('service.qaForm.questions.visualStyle.options.lively') },
                { value: 'stylish', label: t('service.qaForm.questions.visualStyle.options.stylish') },
                { value: 'pastel', label: t('service.qaForm.questions.visualStyle.options.pastel') },

                // Column 4
                { value: 'cute', label: t('service.qaForm.questions.visualStyle.options.cute') },
                { value: 'serious', label: t('service.qaForm.questions.visualStyle.options.serious') },
                { value: 'business', label: t('service.qaForm.questions.visualStyle.options.business') },
                { value: 'natural', label: t('service.qaForm.questions.visualStyle.options.natural') },
                { value: 'traditional', label: t('service.qaForm.questions.visualStyle.options.traditional') },
                { value: 'refreshing', label: t('service.qaForm.questions.visualStyle.options.refreshing') },
                { value: 'metallic', label: t('service.qaForm.questions.visualStyle.options.metallic') },
                { value: 'anime', label: t('service.qaForm.questions.visualStyle.options.anime') },

                // Column 5
                { value: 'cool', label: t('service.qaForm.questions.visualStyle.options.cool') },
                { value: 'elegant', label: t('service.qaForm.questions.visualStyle.options.elegant') },
                { value: 'homey', label: t('service.qaForm.questions.visualStyle.options.homey') },
                { value: 'craft', label: t('service.qaForm.questions.visualStyle.options.craft') },
                { value: 'modern', label: t('service.qaForm.questions.visualStyle.options.modern') },
                { value: 'flashy', label: t('service.qaForm.questions.visualStyle.options.flashy') },
                { value: 'complex', label: t('service.qaForm.questions.visualStyle.options.complex') },
                { value: 'japanese', label: t('service.qaForm.questions.visualStyle.options.japanese') },

                // Column 6
                { value: 'friendly', label: t('service.qaForm.questions.visualStyle.options.friendly') },
                { value: 'luxury', label: t('service.qaForm.questions.visualStyle.options.luxury') },
                { value: 'bright', label: t('service.qaForm.questions.visualStyle.options.bright') },
                { value: 'unique', label: t('service.qaForm.questions.visualStyle.options.unique') },
                { value: 'futuristic', label: t('service.qaForm.questions.visualStyle.options.futuristic') },
                { value: 'subdued', label: t('service.qaForm.questions.visualStyle.options.subdued') },
                { value: 'simple', label: t('service.qaForm.questions.visualStyle.options.simple') },
                { value: 'western', label: t('service.qaForm.questions.visualStyle.options.western') },

                // Column 7
                { value: 'gentle', label: t('service.qaForm.questions.visualStyle.options.gentle') },
                { value: 'elegant2', label: t('service.qaForm.questions.visualStyle.options.elegant2') },
                { value: 'dark', label: t('service.qaForm.questions.visualStyle.options.dark') },
                { value: 'casual', label: t('service.qaForm.questions.visualStyle.options.casual') },
                { value: 'retro', label: t('service.qaForm.questions.visualStyle.options.retro') },
                { value: 'cool2', label: t('service.qaForm.questions.visualStyle.options.cool2') },
                { value: 'colorful', label: t('service.qaForm.questions.visualStyle.options.colorful') }
            ],
            condition: { field: 'brandingDepth', value: 'detailed' }
        },
        // Conditional questions for simple/basic approach
        {
            id: 'designStyle',
            question: t('service.qaForm.questions.designStyle.question'),
            type: 'select',
            options: [
                { value: 'modern', label: t('service.qaForm.questions.designStyle.options.modern') },
                { value: 'minimalist', label: t('service.qaForm.questions.designStyle.options.minimalist') },
                { value: 'casual', label: t('service.qaForm.questions.designStyle.options.casual') },
                { value: 'elegant', label: t('service.qaForm.questions.designStyle.options.elegant') },
                { value: 'professional', label: t('service.qaForm.questions.designStyle.options.professional') }
            ],
            condition: { field: 'brandingDepth', value: 'simple' }
        },
        {
            id: 'colorScheme',
            question: t('service.qaForm.questions.colorScheme.question'),
            type: 'select',
            options: [
                { value: 'blue', label: t('service.qaForm.questions.colorScheme.options.blue') },
                { value: 'green', label: t('service.qaForm.questions.colorScheme.options.green') },
                { value: 'purple', label: t('service.qaForm.questions.colorScheme.options.purple') },
                { value: 'neutral', label: t('service.qaForm.questions.colorScheme.options.neutral') },
                { value: 'warm', label: t('service.qaForm.questions.colorScheme.options.warm') }
            ],
            condition: { field: 'brandingDepth', value: 'simple' }
        },
        {
            id: 'targetDemographics',
            question: t('service.qaForm.questions.targetDemographics.question'),
            type: 'textarea',
            placeholder: t('service.qaForm.questions.targetDemographics.placeholder'),
            condition: { field: 'brandingDepth', value: 'simple' }
        },
        {
            id: 'companyInfo',
            question: t('service.qaForm.questions.companyInfo.question'),
            type: 'textarea',
            placeholder: t('service.qaForm.questions.companyInfo.placeholder')
        },

        {
            id: 'communicationPreference',
            question: t('service.qaForm.questions.communicationPreference.question'),
            type: 'radio',
            options: [
                { value: 'video', label: t('service.qaForm.questions.communicationPreference.options.video') },
                { value: 'email', label: t('service.qaForm.questions.communicationPreference.options.email') },
                { value: 'chat', label: t('service.qaForm.questions.communicationPreference.options.chat') }
            ]
        },
        // Conditional question for chat application details when chat is selected
        {
            id: 'chatDetails',
            question: t('service.qaForm.questions.chatDetails.question'),
            type: 'radio',
            options: [
                { value: 'chatwork', label: t('service.qaForm.questions.chatDetails.options.chatwork') },
                { value: 'slack', label: t('service.qaForm.questions.chatDetails.options.slack') },
                { value: 'discord', label: t('service.qaForm.questions.chatDetails.options.discord') },
                { value: 'other', label: t('service.qaForm.questions.chatDetails.options.other') }
            ],
            condition: { field: 'communicationPreference', value: 'chat' }
        },
        {
            id: 'contactInfo',
            question: t('service.qaForm.questions.contactInfo.question'),
            type: 'contact',
            fields: [
                { name: 'name', label: t('service.qaForm.questions.contactInfo.fields.name'), type: 'text', required: true },
                { name: 'email', label: t('service.qaForm.questions.contactInfo.fields.email'), type: 'email', required: true },
                { name: 'phone', label: t('service.qaForm.questions.contactInfo.fields.phone'), type: 'tel', required: false },
                { name: 'company', label: t('service.qaForm.questions.contactInfo.fields.company'), type: 'text', required: false }
            ]
        }
    ], [t, i18n?.language]); // Re-create when language changes

    const handleNext = () => {
        const visibleQuestions = getFilteredQuestions();
        if (currentStep < visibleQuestions.length - 1) {
            // Check if current question is answered before proceeding
            const currentQuestion = visibleQuestions[currentStep];
            const currentAnswer = formData[currentQuestion.id];

            if (!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
                // Show validation error
                setValidationError(t('service.qaForm.validation.answerRequired', { question: currentQuestion.question }));
                return;
            }

            // Clear validation error when proceeding
            setValidationError('');
            setCurrentStep(currentStep + 1);

            // Clear the form for the next step
            reset();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);

            // Clear the form when going back
            reset();
        }
    };

    const handleAnswer = (questionId, answer) => {
        setFormData(prev => ({
            ...prev,
            [questionId]: answer
        }));

        // Clear validation error when user starts answering
        if (validationError) {
            setValidationError('');
        }
    };

    // PDF Document Component
    const PDFDocument = ({ language = 'en' }) => {
        const styles = language === 'jp' ? japanesePdfStyles : pdfStyles;
        const isJapanese = language === 'jp';

        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.title}>
                        {t('service.qaForm.pdf.title')}
                    </Text>

                    {isJapanese && (
                        <Text style={[styles.title, { fontSize: 16, marginTop: -10, marginBottom: 20, color: '#666' }]}>
                            {t('service.qaForm.pdf.title')}
                        </Text>
                    )}

                    {Object.entries(formData).map(([key, value]) => {
                        const question = qaFlow.find(q => q.id === key);
                        if (!question || !value) return null;

                        return (
                            <View key={key}>
                                <Text style={styles.question}>
                                    {t(`service.qaForm.questions.${key}.question`)}
                                </Text>

                                {Array.isArray(value) ? (
                                    // Handle array values (like features checkbox, visual style grid)
                                    value.map((item, index) => {
                                        let displayText = item;
                                        if (question.type === 'select' || question.type === 'checkbox') {
                                            // Always show the translated text in the current language
                                            displayText = t(`service.qaForm.questions.${key}.options.${item}`);
                                        }

                                        // Special handling for visual style grid to show priority numbers
                                        if (question.type === 'grid') {
                                            const priority = index + 1;
                                            const priorityColor = priority === 1 ? '★' :
                                                priority === 2 ? '♥' :
                                                    priority === 3 ? '♣' :
                                                        priority === 4 ? '♦' : '♠';

                                            return (
                                                <Text key={index} style={styles.answer}>
                                                    {priorityColor} {priority}. {displayText}
                                                </Text>
                                            );
                                        }

                                        return (
                                            <Text key={index} style={styles.answer}>
                                                • {displayText}
                                            </Text>
                                        );
                                    })
                                ) : (
                                    // Handle single values (like projectType, projectScale, budget, timeline)
                                    <Text style={styles.answer}>
                                        {(() => {
                                            // For select and radio fields, always show the descriptive label
                                            if (question.type === 'select' || question.type === 'radio') {
                                                const translatedValue = t(`service.qaForm.questions.${key}.options.${value}`);
                                                return translatedValue;
                                            }
                                            // For other fields (textarea, contact), show as is
                                            return value.toString();
                                        })()}
                                    </Text>
                                )}

                                {/* Show other platform details if "other" is selected */}
                                {key === 'chatDetails' && value === 'other' && formData.otherChatPlatform && (
                                    <Text style={styles.answer}>
                                        Platform Details: {formData.otherChatPlatform}
                                    </Text>
                                )}
                            </View>
                        );
                    })}

                    <Text style={styles.footer}>
                        {t('service.qaForm.pdf.generatedOn')}: {new Date().toLocaleDateString()}
                    </Text>
                </Page>
            </Document>
        );
    };

    const generatePDF = async () => {
        try {
            const currentLang = i18n?.language || 'en';

            // Test if formData is empty
            if (!formData || Object.keys(formData).length === 0) {
                console.error('Form data is empty!');
                alert('No form data to generate PDF. Please complete the form first.');
                return;
            }

            // Generate PDF using react-pdf with I18nextProvider

            // Ensure the language is set before generating PDF
            if (i18n && currentLang !== i18n.language) {
                i18n.changeLanguage(currentLang);
            }

            const pdfBlob = await pdf(
                <I18nextProvider i18n={i18n}>
                    <PDFDocument language={currentLang} />
                </I18nextProvider>
            ).toBlob();

            // Create download link
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;

            // Set filename based on language and branding depth
            const brandingType = formData.brandingDepth || 'standard';
            if (currentLang === 'jp') {
                if (brandingType === 'detailed') {
                    link.download = 'ブランディングプロジェクト見積もり依頼.pdf';
                } else if (brandingType === 'simple') {
                    link.download = 'スタータープロジェクト見積もり依頼.pdf';
                } else {
                    link.download = 'プロジェクト見積もり依頼.pdf';
                }
            } else {
                if (brandingType === 'detailed') {
                    link.download = 'branding-quote-request.pdf';
                } else if (brandingType === 'simple') {
                    link.download = 'starter-quote-request.pdf';
                } else {
                    link.download = 'project-quote-request.pdf';
                }
            }

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Cleanup
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('PDF generation failed:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            alert(`PDF generation failed: ${error.message}. Please try again.`);
        }
    };







    const submitForm = async (data) => {
        // Final validation: check if all VISIBLE questions are answered
        const visibleQuestions = getFilteredQuestions();
        const unansweredQuestions = visibleQuestions.filter(question => {
            if (question.type === 'contact') {
                // For contact fields, check if required fields are filled in form data
                const requiredFields = question.fields.filter(field => field.required);
                return requiredFields.some(field => !data[field.name]);
            } else {
                // For other questions, check formData state
                const answer = formData[question.id];
                return !answer || (Array.isArray(answer) && answer.length === 0);
            }
        });

        if (unansweredQuestions.length > 0) {
            setValidationError(t('service.qaForm.validation.allQuestionsRequired', { question: unansweredQuestions[0].question }));
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare email data that matches the EmailJS template
            const emailData = {
                // Contact information from react-hook-form
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                company: data.company || '',

                // Project details from formData state
                projectType: formData.projectType || '',
                projectScale: formData.projectScale || '',
                budget: formData.budget || '',
                timeline: formData.timeline || '',
                features: Array.isArray(formData.features) ? formData.features.join(', ') : (formData.features || ''),
                companyInfo: formData.companyInfo || '',

                // Branding details (if applicable)
                brandingDepth: formData.brandingDepth || '',
                brandVision: formData.brandVision || '',
                brandMission: formData.brandMission || '',
                targetAudience: formData.targetAudience || '',
                brandPersonality: formData.brandPersonality || '',
                visualStyle: formData.visualStyle ? formData.visualStyle.map((style, index) =>
                    `${index + 1}. ${t(`service.qaForm.questions.visualStyle.options.${style}`)}`
                ).join('\n') : '',

                // Simple/Starter branding details
                designStyle: formData.designStyle || '',
                colorScheme: formData.colorScheme || '',
                targetDemographics: formData.targetDemographics || '',

                // Communication preferences
                communicationPreference: formData.communicationPreference || '',
                chatDetails: formData.chatDetails || '',
                otherChatPlatform: formData.otherChatPlatform || '',

                // Additional metadata
                language: i18n?.language || 'en',
                generated_date: new Date().toLocaleDateString(),
                subject: 'New Project Quote Request',

                // Labels for the template (hardcoded to avoid translation issues)
                labels: {
                    contact_info: i18n?.language === 'jp' ? '連絡先情報' : 'Contact Information',
                    project_type: i18n?.language === 'jp' ? 'プロジェクトタイプ' : 'Project Type',
                    project_scale: i18n?.language === 'jp' ? 'プロジェクト規模' : 'Project Scale',
                    budget: i18n?.language === 'jp' ? '予算' : 'Budget',
                    timeline: i18n?.language === 'jp' ? 'スケジュール' : 'Timeline',
                    features: i18n?.language === 'jp' ? '機能' : 'Features',
                    company_info: i18n?.language === 'jp' ? '会社情報' : 'Company Information',
                    branding_depth: i18n?.language === 'jp' ? 'ブランディング深度' : 'Branding Depth',
                    visual_style: i18n?.language === 'jp' ? 'ビジュアルスタイル' : 'Visual Style',
                    communication: i18n?.language === 'jp' ? 'コミュニケーション方法' : 'Communication Method'
                }
            };



            // Send email using EmailJS (same as Contact component)
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_QA_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_QA_TEMPLATE_ID,
                emailData,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            setIsSubmitted(true);
            setIsSubmitting(false);
        } catch (error) {
            console.error('Email submission failed:', error);
            setIsSubmitting(false);
            // Fallback: show success message anyway
            setIsSubmitted(true);
        }
    };

    const renderQuestion = (question) => {
        switch (question.type) {
            case 'select':
                return (
                    <div className="space-y-3">
                        {question.options.map((option) => (
                            <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    value={option.value}
                                    {...register(question.id)}
                                    onChange={(e) => handleAnswer(question.id, e.target.value)}
                                    className="w-4 h-4 text-blue-600"
                                />
                                <span className="text-gray-500">{option.label}</span>
                            </label>
                        ))}
                    </div>
                );

            case 'radio':
                return (
                    <div className="space-y-3">
                        {question.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-3">
                                <label className="flex items-center space-x-3 cursor-pointer flex-1">
                                    <input
                                        type="radio"
                                        value={option.value}
                                        {...register(question.id)}
                                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-gray-500">{option.label}</span>
                                </label>

                                {/* Inline input for "other" option */}
                                {option.value === 'other' && (
                                    <input
                                        type="text"
                                        placeholder={t('service.qaForm.questions.otherChatPlatform.placeholder')}
                                        onChange={(e) => handleAnswer('otherChatPlatform', e.target.value)}
                                        className="flex-1 text-center p-2 rounded-lg bg-white/10 border border-gray-500 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'grid':
                return (
                    <div className="space-y-4">
                        <p className="text-gray-500 text-sm mb-4">
                            {t('service.qaForm.questions.visualStyle.instruction')}
                        </p>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                            {question.options.map((option) => {
                                const currentValues = formData[question.id] || [];
                                const isSelected = currentValues.includes(option.value);
                                const priority = isSelected ? currentValues.indexOf(option.value) + 1 : null;

                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            if (isSelected) {
                                                // Remove if already selected
                                                handleAnswer(question.id, currentValues.filter(v => v !== option.value));
                                            } else {
                                                // Check if we can add more (limit to 5)
                                                if (currentValues.length < 5) {
                                                    // Add to the end (lowest priority)
                                                    handleAnswer(question.id, [...currentValues, option.value]);
                                                } else {
                                                    // Show alert or handle limit reached
                                                    alert(t('service.qaForm.questions.visualStyle.maxLimitReached'));
                                                }
                                            }
                                        }}
                                        className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:scale-105 relative min-h-[60px] sm:min-h-[80px] flex items-center justify-center ${isSelected
                                            ? priority === 1
                                                ? 'bg-red-500/80 border-red-400 text-white shadow-lg' // 1st priority - Red
                                                : priority === 2
                                                    ? 'bg-pink-500/80 border-pink-400 text-white shadow-lg' // 2nd priority - Pink
                                                    : priority === 3
                                                        ? 'bg-fuchsia-500/80 border-fuchsia-400 text-white shadow-lg' // 3rd priority - Fuchsia
                                                        : priority === 4
                                                            ? 'bg-violet-500/80 border-violet-400 text-white shadow-lg' // 4th priority - Violet
                                                            : 'bg-purple-500/80 border-purple-400 text-white shadow-lg' // 5th priority - Purple
                                            : 'bg-pink-300/50 border-white/50 text-gray-500 hover:bg-white/20 hover:border-white/40'
                                            }`}
                                    >
                                        <span className="text-xs text-center leading-tight font-medium break-words hyphens-auto max-w-full">
                                            {option.label}
                                        </span>
                                        {isSelected && (
                                            <span className={`absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold ${priority === 1
                                                ? 'bg-red-600 text-white'
                                                : priority === 2
                                                    ? 'bg-pink-600 text-white'
                                                    : priority === 3
                                                        ? 'bg-fuchsia-600 text-white'
                                                        : priority === 4
                                                            ? 'bg-violet-600 text-white'
                                                            : 'bg-purple-600 text-white'
                                                }`}>
                                                {priority}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        {formData[question.id] && formData[question.id].length > 0 && (
                            <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20">
                                <p className="text-gray-500 text-sm mb-2">
                                    {t('service.qaForm.questions.visualStyle.priorityOrder')}:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {formData[question.id].map((value, index) => {
                                        const option = question.options.find(opt => opt.value === value);
                                        const priority = index + 1;
                                        const priorityColor = priority === 1 ? 'bg-red-500' :
                                            priority === 2 ? 'bg-pink-500' :
                                                priority === 3 ? 'bg-fuchsia-500' :
                                                    priority === 4 ? 'bg-violet-500' : 'bg-purple-500';

                                        return (
                                            <span key={value} className={`px-3 py-1 rounded-full text-xs font-medium text-white ${priorityColor}`}>
                                                {priority}. {option?.label}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                );

            case 'checkbox':
                return (
                    <div className="space-y-3">
                        {question.options.map((option) => (
                            <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    {...register(question.id)}
                                    onChange={(e) => {
                                        const currentValues = formData[question.id] || [];
                                        if (e.target.checked) {
                                            handleAnswer(question.id, [...currentValues, option.value]);
                                        } else {
                                            handleAnswer(question.id, currentValues.filter(v => v !== option.value));
                                        }
                                    }}
                                    className="w-4 h-4 text-blue-600"
                                />
                                <span className="text-gray-500">{option.label}</span>
                            </label>
                        ))}
                    </div>
                );

            case 'textarea':
                return (
                    <textarea
                        {...register(question.id)}
                        placeholder={question.placeholder}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        rows="4"
                    />
                );

            case 'contact':
                return (
                    <div className="space-y-4">
                        {question.fields.map((field) => (
                            <div key={field.name}>
                                <label className="block text-white mb-2">{field.label}</label>
                                <input
                                    type={field.type}
                                    {...register(field.name, { required: field.required })}
                                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                                    placeholder={field.label}
                                />
                                {errors[field.name] && (
                                    <span className="text-red-400 text-sm">{field.label} is required</span>
                                )}
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    if (!isOpen) return null;

    if (isSubmitted) {
        return (
            <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="border border-gray-500 bg-pink-300/50 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-md w-full text-center">

                    <h3 className="text-2xl font-bold text-gray-500 mb-4">{t('service.qaForm.success.title')}</h3>
                    <p className="text-gray-500 mb-6">
                        {t('service.qaForm.success.message')}
                    </p>



                    <p className="text-gray-500 text-sm mb-6">
                        {t('service.qaForm.success.refreshMessage')}
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={generatePDF}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                        >
                            {t('service.qaForm.success.downloadPDF')}
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-pink-300/40 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
                        >
                            {t('service.qaForm.success.close')}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-gray-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-500">{t('service.qaForm.title')}</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-500 text-2xl pt-5"
                    >
                        ×
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>{t('service.qaForm.progress', { current: currentStep + 1, total: getFilteredQuestions().length })}</span>
                        <span>{t('service.qaForm.progressPercent', { percent: Math.round(((currentStep + 1) / getFilteredQuestions().length) * 100) })}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / getFilteredQuestions().length) * 100}%` }}
                        />
                    </div>

                    {/* Question Completion Status */}
                    <div className="flex gap-2 mt-3">
                        {getFilteredQuestions().map((question, index) => {
                            let isAnswered = false;

                            if (question.type === 'contact') {
                                // For contact fields, check if required fields are filled
                                const requiredFields = question.fields.filter(field => field.required);
                                isAnswered = requiredFields.every(field => {
                                    const fieldValue = watch(field.name);
                                    return fieldValue && fieldValue.trim() !== '';
                                });
                            } else {
                                // For other questions, check formData state
                                const answer = formData[question.id];
                                isAnswered = answer && (Array.isArray(answer) ? answer.length > 0 : true);
                            }

                            const isCurrent = index === currentStep;

                            return (
                                <div
                                    key={question.id}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${isCurrent
                                        ? 'bg-blue-400 scale-125'
                                        : isAnswered
                                            ? 'bg-pink-300'
                                            : 'bg-white/60'
                                        }`}
                                    title={`${question.question}: ${isAnswered ? 'Answered' : 'Not answered'}`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Question */}
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">
                            {getFilteredQuestions()[currentStep]?.question || ''}
                            <span className="text-red-400 ml-2">{t('service.qaForm.required')}</span>
                        </h3>
                        {getFilteredQuestions()[currentStep] && renderQuestion(getFilteredQuestions()[currentStep])}

                        {/* Validation Error Display */}
                        {validationError && (
                            <div className="mt-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg">
                                <p className="text-red-400 text-sm">{validationError}</p>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 0
                                ? 'bg-pink-300/40 text-white/60 cursor-not-allowed'
                                : 'bg-pink-300/80 text-white'
                                }`}
                        >
                            {t('service.qaForm.previous')}
                        </button>

                        {currentStep < getFilteredQuestions().length - 1 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                            >
                                {t('service.qaForm.next')}
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${isSubmitting
                                    ? 'bg-pink-300/40 text-white cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                            >
                                {isSubmitting ? t('service.qaForm.submitting') : t('service.qaForm.submit')}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QAQuote; 