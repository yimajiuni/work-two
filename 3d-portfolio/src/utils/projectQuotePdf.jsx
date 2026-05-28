import { I18nextProvider } from "react-i18next";

let pdfStylesCache = null;

async function getPdfStyleSheets() {
    if (pdfStylesCache) return pdfStylesCache;

    const { StyleSheet } = await import("@react-pdf/renderer");
    pdfStylesCache = {
        pdfStyles: StyleSheet.create({
            page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
            title: { fontSize: 24, marginBottom: 20, textAlign: "center", fontWeight: "bold" },
            question: { fontSize: 14, marginTop: 15, marginBottom: 5, fontWeight: "bold" },
            answer: { fontSize: 12, marginLeft: 20, marginBottom: 10 },
            footer: { fontSize: 10, marginTop: 30, textAlign: "center", color: "#666" },
        }),
        japanesePdfStyles: StyleSheet.create({
            page: { padding: 30, fontSize: 12, fontFamily: "NotoSansJP" },
            title: { fontSize: 24, marginBottom: 20, textAlign: "center", fontWeight: "bold" },
            question: { fontSize: 14, marginTop: 15, marginBottom: 5, fontWeight: "bold" },
            answer: { fontSize: 12, marginLeft: 20, marginBottom: 10 },
            footer: { fontSize: 10, marginTop: 30, textAlign: "center", color: "#666" },
        }),
    };
    return pdfStylesCache;
}

async function registerPdfFonts(Font) {
    Font.register({
        family: "NotoSansJP",
        fonts: [
            { src: "/fonts/NotoSansJP-Regular.ttf", fontWeight: 400 },
            { src: "/fonts/NotoSansJP-Bold.ttf", fontWeight: 700 },
        ],
    });
}

function buildPdfDocument({ Document, Page, Text, View, styles, t, formData, qaFlow, language }) {
    const isJapanese = language === "jp";

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>{t("service.qaForm.pdf.title")}</Text>

                {isJapanese && (
                    <Text
                        style={[
                            styles.title,
                            { fontSize: 16, marginTop: -10, marginBottom: 20, color: "#666" },
                        ]}
                    >
                        {t("service.qaForm.pdf.title")}
                    </Text>
                )}

                {Object.entries(formData).map(([key, value]) => {
                    const question = qaFlow.find((q) => q.id === key);
                    if (!question || !value) return null;

                    return (
                        <View key={key}>
                            <Text style={styles.question}>
                                {t(`service.qaForm.questions.${key}.question`)}
                            </Text>

                            {Array.isArray(value) ? (
                                value.map((item, index) => {
                                    let displayText = item;
                                    if (question.type === "select" || question.type === "checkbox") {
                                        displayText = t(`service.qaForm.questions.${key}.options.${item}`);
                                    }

                                    if (question.type === "grid") {
                                        const priority = index + 1;
                                        const priorityColor =
                                            priority === 1
                                                ? "★"
                                                : priority === 2
                                                  ? "♥"
                                                  : priority === 3
                                                    ? "♣"
                                                    : priority === 4
                                                      ? "♦"
                                                      : "♠";

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
                                <Text style={styles.answer}>
                                    {(() => {
                                        if (question.type === "dual-textarea") {
                                            const websiteData = value;
                                            return [
                                                `${t("service.qaForm.questions.websiteReferences.atmosphareQuestion")}: ${websiteData.atmosphere || "N/A"}`,
                                                `${t("service.qaForm.questions.websiteReferences.functionQuestion")}: ${websiteData.function || "N/A"}`,
                                            ].join("\n");
                                        }

                                        if (question.type === "select" || question.type === "radio") {
                                            return t(`service.qaForm.questions.${key}.options.${value}`);
                                        }
                                        return value.toString();
                                    })()}
                                </Text>
                            )}

                            {key === "chatDetails" &&
                                value === "other" &&
                                formData.otherChatPlatform && (
                                    <Text style={styles.answer}>
                                        Platform Details: {formData.otherChatPlatform}
                                    </Text>
                                )}
                        </View>
                    );
                })}

                <Text style={styles.footer}>
                    {t("service.qaForm.pdf.generatedOn")}: {new Date().toLocaleDateString()}
                </Text>
            </Page>
        </Document>
    );
}

/**
 * @param {object} params
 * @param {Record<string, unknown>} params.formData
 * @param {Array} params.qaFlow
 * @param {import('i18next').TFunction} params.t
 * @param {import('i18next').i18n} params.i18n
 */
export async function downloadProjectQuotePdf({ formData, qaFlow, t, i18n }) {
    const { pdf, Document, Page, Text, View, Font } = await import("@react-pdf/renderer");
    const { pdfStyles, japanesePdfStyles } = await getPdfStyleSheets();

    await registerPdfFonts(Font);

    const currentLang = i18n?.language || "en";
    const styles = currentLang === "jp" ? japanesePdfStyles : pdfStyles;

    if (currentLang !== i18n.language) {
        await i18n.changeLanguage(currentLang);
    }

    const pdfBlob = await pdf(
        <I18nextProvider i18n={i18n}>
            {buildPdfDocument({
                Document,
                Page,
                Text,
                View,
                styles,
                t,
                formData,
                qaFlow,
                language: currentLang,
            })}
        </I18nextProvider>
    ).toBlob();

    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;

    const brandingType = formData.brandingDepth || "standard";
    if (currentLang === "jp") {
        if (brandingType === "detailed") {
            link.download = "ブランディングプロジェクト見積もり依頼.pdf";
        } else if (brandingType === "simple") {
            link.download = "スタータープロジェクト見積もり依頼.pdf";
        } else {
            link.download = "プロジェクト見積もり依頼.pdf";
        }
    } else if (brandingType === "detailed") {
        link.download = "branding-quote-request.pdf";
    } else if (brandingType === "simple") {
        link.download = "starter-quote-request.pdf";
    } else {
        link.download = "project-quote-request.pdf";
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
