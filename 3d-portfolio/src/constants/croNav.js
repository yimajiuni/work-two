export const CRO_SECTION_ANCHORS = [
    { sectionId: 1, anchorId: "cro-value", labelKey: "croShowcase.nav.value" },
    { sectionId: 2, anchorId: "cro-experience", labelKey: "croShowcase.nav.experience" },
    { sectionId: 3, anchorId: "cro-operation", labelKey: "croShowcase.nav.operation" },
    { sectionId: 4, anchorId: "cro-performance", labelKey: "croShowcase.nav.performance" },
];

export const CRO_ANCHOR_TO_SECTION = Object.fromEntries(
    CRO_SECTION_ANCHORS.map(({ sectionId, anchorId }) => [anchorId, sectionId]),
);

export const SECTION_ID_TO_ANCHOR = Object.fromEntries(
    CRO_SECTION_ANCHORS.map(({ sectionId, anchorId }) => [sectionId, anchorId]),
);
