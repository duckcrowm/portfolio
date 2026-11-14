module.exports = [
(()=>{"use strict";return[
"[project]/app/skills/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillGalleryPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$back$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/back-button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sub$2d$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sub-navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portfolio-data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: 'Thiết kế ảnh 2D thành thạo - Phan Đức Portfolio'
};
async function SkillGalleryPage({ params }) {
    const { id } = await params;
    const skillId = id;
    const images = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skillImages"][skillId] || [];
    const stats = [
        {
            value: '2',
            label: 'Dự án'
        },
        {
            value: '50+',
            label: 'Ấn phẩm thiết kế'
        },
        {
            value: '98%',
            label: 'Mức độ hài lòng'
        }
    ];
    const softwareTags = [
        'Photoshop',
        'Canva'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mb-8 flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$back$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BackButton"], {}, void 0, false, {
                    fileName: "[project]/app/skills/[id]/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/skills/[id]/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sub$2d$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubNavbar"], {}, void 0, false, {
                fileName: "[project]/app/skills/[id]/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero-2d",
                className: "relative z-10 mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-72 p-6 rounded-xl border border-border bg-card shadow-lg shadow-primary/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-primary",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/skills/[id]/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/skills/[id]/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/skills/[id]/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/skills/[id]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    'Pallate',
                                    'Kỹ năng chuyên môn'
                                ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono font-semibold text-primary",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/skills/[id]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-display font-bold tracking-tight sm:text-6xl leading-tight",
                                children: "Thiết kế ảnh 2D"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl leading-relaxed",
                                children: "Thiết kế đồ họa 2D là cách mình muốn truyền tải thông điệp một cách trực quan nhất của thương hiệu đến với công chúng - từ logo, poster, bài đăng mạng xã hội đến tài liệu marketing, giúp doanh nghiệp truyền tải thông điệp trực quan, đồng nhất và hấp dẫn trên mọi kênh truyền thông."
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/skills/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "software-2d",
                className: "mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary font-mono text-xs",
                                children: "⚙️"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground",
                                children: "Bộ công cụ tương ứng"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-16",
                        children: softwareTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-2.5 rounded-full border border-border bg-background text-sm font-mono font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/skills/[id]/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery-2d",
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-baseline gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-display font-bold tracking-tight",
                                children: "Thư Viện Thiết Kế 2D"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider",
                                children: [
                                    images.length,
                                    " dự án"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary font-mono text-xs",
                                children: "🟢"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground",
                                children: "Mộc Hương"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    images.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Chưa có ảnh nào được thêm vào."
                    }, void 0, false, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                        children: images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                        src: src,
                                        alt: `Thiết kế 2D ${index + 1}`,
                                        fill: true,
                                        className: "object-cover object-center hover:scale-105 transition-transform duration-300",
                                        sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 90vw",
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/app/skills/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-end p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            children: "Xem chi tiết"
                                        }, void 0, false, {
                                            fileName: "[project]/app/skills/[id]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/skills/[id]/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, src, true, {
                                fileName: "[project]/app/skills/[id]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/skills/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/skills/[id]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/skills/[id]/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/back-button.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackButton",
    ()=>BackButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BackButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BackButton() from the server but BackButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/back-button.tsx", "BackButton");
}),
"[project]/components/back-button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$back$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/back-button.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$back$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sub-navbar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubNavbar",
    ()=>SubNavbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SubNavbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SubNavbar() from the server but SubNavbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sub-navbar.tsx", "SubNavbar");
}),
"[project]/components/sub-navbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sub$2d$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sub-navbar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sub$2d$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/portfolio-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryIds",
    ()=>categoryIds,
    "content",
    ()=>content,
    "profile",
    ()=>profile,
    "skillImages",
    ()=>skillImages,
    "tools",
    ()=>tools
]);
const profile = {
    shortName: 'phanduc',
    coordinates: '10.7769° N / 106.7009° E',
    email: 'phanduc.contact@gmail.com',
    phone: '0393 512 660',
    phoneRaw: '0393512660',
    upwork: 'upwork.com/freelancers/phanduc',
    upworkUrl: 'https://www.upwork.com/',
    linkedin: 'linkedin.com/in/duchoang',
    linkedinUrl: 'https://www.linkedin.com/in/duchoang'
};
const tools = [
    {
        id: 'capcut',
        name: 'CapCut',
        level: 100
    },
    {
        id: 'canva',
        name: 'Canva',
        level: 100
    },
    {
        id: 'powerpoint',
        name: 'PowerPoint',
        level: 100
    },
    {
        id: 'premiere',
        name: 'Adobe Premiere',
        level: 80
    },
    {
        id: 'claude-code',
        name: 'Claude Code',
        level: 70
    },
    {
        id: 'wordpress',
        name: 'WordPress',
        level: 70
    }
];
const categoryIds = [
    'all',
    'content',
    'design',
    'video',
    'ads',
    'tech'
];
const skillImages = {
    'design-2d': [
        '/images/skills/design-2d/jh.jpg'
    ],
    campaign: [
        '/images/skills/campaign-1.png',
        '/images/skills/campaign-2.png'
    ],
    shooting: [
        '/images/skills/shoot-1.png',
        '/images/skills/shoot-2.png'
    ],
    ai: [
        '/images/skills/ai-1.png',
        '/images/skills/ai-2.png'
    ],
    learning: [
        '/images/skills/learn-1.png',
        '/images/skills/learn-2.png'
    ]
};
const vi = {
    categories: {
        all: 'Tất cả',
        content: 'Content',
        design: 'Thiết kế',
        video: 'Quay dựng',
        ads: 'Quảng cáo',
        tech: 'Công nghệ & AI'
    },
    filter: {
        tabsLabel: 'Danh mục kỹ năng',
        hint: 'Chọn danh mục để lọc Kỹ năng và Dự án bên dưới',
        active: (label)=>`Đang lọc: ${label}`,
        empty: 'Chưa có mục nào thuộc danh mục này.'
    },
    nav: {
        home: 'Trang chủ',
        skills: 'Kỹ năng',
        projects: 'Dự án',
        experience: 'Kinh nghiệm',
        contact: 'Liên hệ'
    },
    ui: {
        mainNav: 'Điều hướng chính',
        mobileNav: 'Điều hướng di động',
        toggleTheme: 'Chuyển chế độ sáng/tối',
        language: 'Ngôn ngữ',
        openMenu: 'Mở menu',
        closeMenu: 'Đóng menu'
    },
    hero: {
        greeting: 'Xin chào, mình là',
        name: 'Phan Đức',
        headline: 'Marketing',
        roles: [
            'Content Executive',
            'Marketing Technology'
        ],
        hello: 'Xin chào ai đó!',
        introBefore: 'Đối với mình, mỗi thương hiệu và sản phẩm đều mang trong mình một câu chuyện và linh hồn riêng - mình rất hào hứng trong việc kể những câu chuyện ý nghĩa đó đến với mọi người. Mình hy vọng bằng cách sử dụng ngôn ngữ hình ảnh và nội dung sẽ là ',
        highlight: 'chiếc cầu nối nhỏ',
        introAfter: ' đưa những giá trị cảm xúc của thương hiệu đến với công chúng.',
        intro2: 'Góc nhỏ này là nơi mình đồng hành cùng các dự án, nơi cất giữ những kỷ niệm sáng tạo và nhiệt huyết. Mỗi dự án là một câu chuyện thú vị, một bài học, và mình rất vui khi được chia sẻ tại đây.',
        motto: 'Cùng bước tiếp để thấy ánh sáng rực rỡ.',
        ctaPrimary: 'Kết nối ngay',
        ctaSecondary: 'Xem dự án',
        caption: 'Một khung cảnh có rất nhiều câu chuyện mà mình thích',
        imageAlt: 'Tòa lâu đài tối tăm dưới tán cây khổng lồ, một bóng người khoác áo choàng đứng giữa đồng cỏ'
    },
    skills: {
        title: 'Công cụ và Kỹ năng',
        code: 'skills',
        toolsTitle: 'Công cụ',
        toolLevel: (name)=>`Mức thành thạo ${name}`,
        skillsTitle: 'Kỹ năng',
        skillsHint: '*(nhấn vào để xem chi tiết)',
        gallery: {
            close: 'Đóng thư viện ảnh',
            prev: 'Ảnh trước',
            next: 'Ảnh tiếp theo',
            goTo: (n)=>`Xem ảnh ${n}`,
            counter: (current, total)=>`${current} / ${total}`
        },
        cards: [
            {
                id: 'design-2d',
                title: 'Thiết kế ảnh 2D thành thạo',
                categories: [
                    'design'
                ],
                imageAlts: [
                    'Bố cục poster 2D với các khối hình học đỏ, đen và trắng',
                    'Lưới bài đăng mạng xã hội thiết kế theo phong cách phẳng'
                ]
            },
            {
                id: 'campaign',
                title: 'Setup campaign',
                categories: [
                    'ads',
                    'content'
                ],
                imageAlts: [
                    'Bảng lên kế hoạch chiến dịch marketing với ghi chú và dòng thời gian',
                    'Màn hình laptop hiển thị biểu đồ hiệu quả quảng cáo tăng trưởng'
                ]
            },
            {
                id: 'shooting',
                title: 'Quay chụp cơ bản',
                subtitle: 'điện thoại và máy ảnh',
                categories: [
                    'video'
                ],
                imageAlts: [
                    'Điện thoại gắn chân đế đang quay sản phẩm trên bàn',
                    'Máy ảnh mirrorless bên cạnh bộ dụng cụ chụp sản phẩm'
                ]
            },
            {
                id: 'ai',
                title: 'Sử dụng AI để làm việc',
                subtitle: 'tạo ảnh/ video sản phẩm, nghiên cứu thị trường, tạo website, edit video,...',
                categories: [
                    'tech',
                    'video',
                    'design'
                ],
                imageAlts: [
                    'Hình ảnh trừu tượng về AI tạo ảnh và video với các đường sáng đỏ',
                    'Laptop hiển thị trình soạn code cùng trợ lý AI'
                ]
            },
            {
                id: 'learning',
                title: 'Sẵn sàng tự học mọi thứ',
                categories: [
                    'content',
                    'design',
                    'video',
                    'ads',
                    'tech'
                ],
                imageAlts: [
                    'Chồng sổ tay và sách trên bàn học dưới ánh đèn đỏ',
                    'Người leo lên những bậc thang làm từ sách hướng về ánh sáng'
                ]
            }
        ]
    },
    projects: {
        title: 'Dự án',
        code: 'projects.log',
        filterAria: 'Lọc dự án',
        all: 'Tất cả',
        result: 'Kết quả',
        groups: {
            work: {
                title: 'Dự án tại công ty',
                code: 'in_house_and_corporate_projects',
                unit: 'công ty'
            },
            freelance: {
                title: 'Dự án ngắn hạn / Freelancer',
                code: 'freelance_and_short_term_collaborations',
                unit: 'dự án / nền tảng'
            }
        },
        items: [
            {
                id: 'moc-huong',
                type: 'work',
                role: 'Content Executive',
                company: 'Công ty TNHH Mộc Hương',
                period: '11/2023 - 08/2024',
                categories: [
                    'content',
                    'design',
                    'tech'
                ],
                tasks: [
                    'Phụ trách triển khai kế hoạch nội dung tổng thể hàng tháng trên 3 kênh (Facebook, LinkedIn, Zalo Community)',
                    'Quản lý Website công ty và đề xuất chiến lược hợp nhất thương hiệu cho hệ thống social media',
                    'Phối hợp cùng Tech Lead sản xuất marketing material phục vụ đội sales và đối tác',
                    'Lập kế hoạch và triển khai sự kiện offline/online, thiết kế trọn bộ ấn phẩm POSM'
                ],
                results: [
                    'Tổ chức thành công Workshop (20+ khách) và Webinar (30+ khách)',
                    'Website +13% phiên truy cập; LinkedIn +68.9% clicks; Facebook +162.5% tương tác'
                ]
            },
            {
                id: 'thuong-hieu-trang-suc',
                type: 'freelance',
                role: 'Content & Media Marketing',
                company: 'Thương hiệu Trang sức',
                period: '03/2025 - 05/2025',
                categories: [
                    'content',
                    'design',
                    'video'
                ],
                tasks: [
                    'Lên lịch và nội dung cho Post',
                    'Hỗ trợ thiết kế cùng Designer',
                    'Quay chụp sản phẩm tại cửa hàng'
                ],
                results: [
                    'Tăng 15.4% lượt tiếp cận, 46.2% lượt tương tác Facebook trong 2 tháng'
                ]
            }
        ]
    },
    experience: {
        title: 'Kinh nghiệm',
        code: 'experience',
        location: 'Ha Noi, Vietnam',
        about: [
            'Mình là Marketer với 3+ năm kinh nghiệm trong mảng Branding và quản trị nội dung đa nền tảng. Mình thích tìm tòi về giao diện và cách vận hành của các nền tảng số để tìm ra cách truyền tải nội dung tự nhiên, gần gũi nhất đến người dùng.',
            'Mình đang tìm kiếm cơ hội tại các công ty công nghệ, mong muốn dùng tư duy sáng tạo để xóa bỏ rào cản giữa đội ngũ kỹ thuật và khách hàng.'
        ],
        stats: [
            {
                value: '9+',
                label: 'Tháng kinh nghiệm'
            },
            {
                value: '4+',
                label: 'Dự án hoàn thành'
            }
        ],
        education: 'Trường Đại học Kinh tế Quốc dân (NEU) - ngành Marketing',
        certsTitle: 'Chứng chỉ',
        certificates: [
            {
                title: 'Top 500 #AIRiserVietnam2026 Participants',
                issuer: 'Google for Developers',
                date: 'Tháng 10, 2026'
            },
            {
                title: 'IBM Product Manager',
                issuer: 'Coursera',
                date: 'Tháng 09, 2026'
            },
            {
                title: 'Google Project Management',
                issuer: 'Coursera · Google',
                date: 'Tháng 09, 2026'
            },
            {
                title: 'Google Data-Driven Decision Making',
                issuer: 'Coursera · Google',
                date: 'Tháng 09, 2026'
            }
        ]
    },
    contact: {
        title: 'Kết Nối Ngay',
        text: 'Mình luôn sẵn sàng cho những cơ hội đồng hành và những dự án đầy tiềm năng phía trước. Hãy để lại lời nhắn hoặc kết nối với mình qua các kênh bên dưới nhé.',
        email: 'Email',
        phone: 'Điện thoại'
    },
    footer: {
        serverTime: 'GIỜ MÁY CHỦ',
        coordinates: 'TỌA ĐỘ'
    }
};
const en = {
    categories: {
        all: 'All',
        content: 'Content',
        design: 'Design',
        video: 'Video & Photo',
        ads: 'Advertising',
        tech: 'Tech & AI'
    },
    filter: {
        tabsLabel: 'Skill categories',
        hint: 'Pick a category to filter the Skills and Projects below',
        active: (label)=>`Filtering: ${label}`,
        empty: 'Nothing in this category yet.'
    },
    nav: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
    },
    ui: {
        mainNav: 'Main navigation',
        mobileNav: 'Mobile navigation',
        toggleTheme: 'Toggle light/dark mode',
        language: 'Language',
        openMenu: 'Open menu',
        closeMenu: 'Close menu'
    },
    hero: {
        greeting: 'Hi, I am',
        name: 'Phan Đức',
        headline: 'Marketing',
        roles: [
            'Content Executive',
            'Marketing Technology'
        ],
        hello: 'Hello, stranger!',
        introBefore: 'To me, every brand and product carries its own story and soul - and I am thrilled to tell those meaningful stories to everyone. I hope that by using visual language and content, I can be a ',
        highlight: 'small bridge',
        introAfter: ' that brings the emotional value of a brand to the public.',
        intro2: 'This little corner is where I walk alongside my projects and keep my creative memories and passion. Every project is an interesting story and a lesson, and I am happy to share them here.',
        motto: 'Let us keep moving forward to see the radiant light.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'View projects',
        caption: 'A scene full of stories that I love',
        imageAlt: 'A dark gothic castle beneath a giant tree, with a cloaked figure standing in the grass'
    },
    skills: {
        title: 'Tools & Skills',
        code: 'skills',
        toolsTitle: 'Tools',
        toolLevel: (name)=>`Proficiency in ${name}`,
        skillsTitle: 'Skills',
        skillsHint: '*(click to see details)',
        gallery: {
            close: 'Close gallery',
            prev: 'Previous image',
            next: 'Next image',
            goTo: (n)=>`Go to image ${n}`,
            counter: (current, total)=>`${current} / ${total}`
        },
        cards: [
            {
                id: 'design-2d',
                title: 'Proficient 2D image design',
                categories: [
                    'design'
                ],
                imageAlts: [
                    '2D poster layout with red, black and white geometric shapes',
                    'Grid of social media posts in a flat design style'
                ]
            },
            {
                id: 'campaign',
                title: 'Campaign setup',
                categories: [
                    'ads',
                    'content'
                ],
                imageAlts: [
                    'Marketing campaign planning board with notes and a timeline',
                    'Laptop screen showing rising ad performance charts'
                ]
            },
            {
                id: 'shooting',
                title: 'Basic shooting',
                subtitle: 'phone and camera',
                categories: [
                    'video'
                ],
                imageAlts: [
                    'Phone on a tripod filming a product on a table',
                    'Mirrorless camera next to a product photography setup'
                ]
            },
            {
                id: 'ai',
                title: 'Using AI to work',
                subtitle: 'product images/videos, market research, websites, video editing,...',
                categories: [
                    'tech',
                    'video',
                    'design'
                ],
                imageAlts: [
                    'Abstract visual of AI generating images and video with red lines',
                    'Laptop showing a code editor with an AI assistant'
                ]
            },
            {
                id: 'learning',
                title: 'Ready to self-learn anything',
                categories: [
                    'content',
                    'design',
                    'video',
                    'ads',
                    'tech'
                ],
                imageAlts: [
                    'Stack of notebooks and books on a study desk under a red lamp',
                    'A person climbing stairs made of books toward a light'
                ]
            }
        ]
    },
    projects: {
        title: 'Projects',
        code: 'projects.log',
        filterAria: 'Filter projects',
        all: 'All',
        result: 'Results',
        groups: {
            work: {
                title: 'In-house projects',
                code: 'in_house_and_corporate_projects',
                unit: 'companies'
            },
            freelance: {
                title: 'Short-term / Freelance',
                code: 'freelance_and_short_term_collaborations',
                unit: 'projects / platforms'
            }
        },
        items: [
            {
                id: 'moc-huong',
                type: 'work',
                role: 'Content Executive',
                company: 'Mộc Hương Co., Ltd.',
                period: '11/2023 - 08/2024',
                categories: [
                    'content',
                    'design',
                    'tech'
                ],
                tasks: [
                    'Led the monthly master content plan across 3 channels (Facebook, LinkedIn, Zalo Community)',
                    'Managed the company website and proposed a unified brand strategy for the social media system',
                    'Worked with the Tech Lead to produce marketing materials for the sales team and partners',
                    'Planned and ran offline/online events and designed the full set of POSM materials'
                ],
                results: [
                    'Successfully organized a Workshop (20+ guests) and a Webinar (30+ guests)',
                    'Website +13% sessions; LinkedIn +68.9% clicks; Facebook +162.5% engagement'
                ]
            },
            {
                id: 'jewelry-brand',
                type: 'freelance',
                role: 'Content & Media Marketing',
                company: 'Jewelry Brand',
                period: '03/2025 - 05/2025',
                categories: [
                    'content',
                    'design',
                    'video'
                ],
                tasks: [
                    'Scheduled posts and wrote content',
                    'Supported the Designer with visuals',
                    'Shot products in store'
                ],
                results: [
                    'Grew Facebook reach by 15.4% and engagement by 46.2% in 2 months'
                ]
            }
        ]
    },
    experience: {
        title: 'Experience',
        code: 'experience',
        location: 'Ha Noi, Vietnam',
        about: [
            'I am a Marketer with 3+ years of experience in Branding and multi-platform content management. I love exploring the interfaces and inner workings of digital platforms to find the most natural and approachable way to deliver content to users.',
            'I am looking for opportunities at technology companies, hoping to use creative thinking to break down the barrier between engineering teams and customers.'
        ],
        stats: [
            {
                value: '9+',
                label: 'Months of experience'
            },
            {
                value: '4+',
                label: 'Projects completed'
            }
        ],
        education: 'National Economics University (NEU) - Marketing Major',
        certsTitle: 'Certificates',
        certificates: [
            {
                title: 'Top 500 #AIRiserVietnam2026 Participants',
                issuer: 'Google for Developers',
                date: 'Oct 2026'
            },
            {
                title: 'IBM Product Manager',
                issuer: 'Coursera',
                date: 'Sep 2026'
            },
            {
                title: 'Google Project Management',
                issuer: 'Coursera · Google',
                date: 'Sep 2026'
            },
            {
                title: 'Google Data-Driven Decision Making',
                issuer: 'Coursera · Google',
                date: 'Sep 2026'
            }
        ]
    },
    contact: {
        title: 'Get In Touch',
        text: 'I am always open to new collaborations and promising projects ahead. Leave a message or reach out through any of the channels below.',
        email: 'Email',
        phone: 'Phone'
    },
    footer: {
        serverTime: 'SERVER TIME',
        coordinates: 'COORDINATES'
    }
};
const content = {
    vi,
    en
};
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/skills/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/skills/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0k7emsyj6fc2s._.js.map