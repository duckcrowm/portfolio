module.exports = [
(()=>{"use strict";return[
"[project]/components/language-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portfolio-data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider({ children }) {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vi');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = lang;
    }, [
        lang
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            lang,
            setLang,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"][lang]
        }), [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/language-provider.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
function useLanguage() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
}),
"[project]/components/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme-provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/portfolio-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    email: 'contact@phanduc.tech',
    phone: '0900 000 000',
    phoneRaw: '0900000000',
    upwork: 'upwork.com/freelancers/phanduc',
    upworkUrl: 'https://www.upwork.com/',
    linkedin: 'linkedin.com/in/phanduc',
    linkedinUrl: 'https://www.linkedin.com/'
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
        '/images/skills/design-1.png',
        '/images/skills/design-2.png'
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
                type: 'work',
                role: 'Marketing Executive (kiêm Team Lead)',
                company: 'Công ty Công nghệ ABC',
                period: '07/2026 - Nay',
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
                type: 'work',
                role: 'Brand & Content Executive',
                company: 'Công ty Du lịch XYZ',
                period: '12/2025 - 07/2026',
                categories: [
                    'content',
                    'video',
                    'ads',
                    'tech'
                ],
                tasks: [
                    'Xây dựng Website từ đầu, hệ thống Admin quản trị Tours, Blogs; tối ưu Responsive & SEO',
                    'Lập kế hoạch chiến lược Marketing 1 năm, phân bổ ngân sách, quản trị tài sản thương hiệu',
                    'Quay và dựng video, thiết kế Social Post',
                    'Chạy Facebook Ads và Google Ads'
                ],
                results: [
                    'Đạt 800K+ lượt xem, 390K+ lượt tương tác sau 1 tháng chạy Ads',
                    'CTR Google Ads đạt 2.93%, 35K+ lượt hiển thị, 3K+ lượt truy cập'
                ]
            },
            {
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
            },
            {
                type: 'freelance',
                role: 'Content Creator, Social Media',
                company: 'Kênh YouTube Giáo dục',
                period: '09/2024 - 05/2025',
                categories: [
                    'content',
                    'video'
                ],
                tasks: [
                    'Quay và edit video theo chủ đề',
                    'Quản lý kênh YouTube: bình luận, bản quyền, video'
                ],
                results: [
                    'Tăng 500 subscribers & 200% tổng lượt view của kênh'
                ]
            },
            {
                type: 'freelance',
                role: 'Content Marketing, Designer',
                company: 'Trung tâm Âm nhạc',
                period: '06/2024 - 09/2024',
                categories: [
                    'content',
                    'design',
                    'video'
                ],
                tasks: [
                    'Thiết kế Social Post, Banner, Standee, giáo trình',
                    'Edit video Reels, TikTok, YouTube'
                ],
                results: [
                    'Tăng 30% follow Fanpage',
                    'Tăng 20%+ khách hàng chốt đơn'
                ]
            },
            {
                type: 'freelance',
                role: 'Freelancer',
                company: 'Upwork',
                period: '2023 - Nay',
                categories: [
                    'content',
                    'design',
                    'tech'
                ],
                tasks: [
                    'Social Media Marketing, Presentation Design, Data Entry'
                ],
                results: [
                    'Hoàn thành 20+ jobs, 100% Job Success',
                    'Đạt Top Rated'
                ]
            }
        ]
    },
    experience: {
        title: 'Kinh nghiệm',
        code: 'experience',
        location: 'Ho Chi Minh City, Vietnam',
        about: [
            'Mình là Marketer với 3+ năm kinh nghiệm trong mảng Branding và quản trị nội dung đa nền tảng. Mình thích tìm tòi về giao diện và cách vận hành của các nền tảng số để tìm ra cách truyền tải nội dung tự nhiên, gần gũi nhất đến người dùng.',
            'Mình đang tìm kiếm cơ hội tại các công ty công nghệ, mong muốn dùng tư duy sáng tạo để xóa bỏ rào cản giữa đội ngũ kỹ thuật và khách hàng.'
        ],
        stats: [
            {
                value: '3+',
                label: 'Năm kinh nghiệm'
            },
            {
                value: '20+',
                label: 'Dự án hoàn thành'
            },
            {
                value: 'BA',
                label: 'ngành Marketing'
            }
        ],
        education: 'Trường Đại học Công nghiệp TPHCM (IUH)',
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
                type: 'work',
                role: 'Marketing Executive (Team Lead)',
                company: 'ABC Technology Company',
                period: '07/2026 - Present',
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
                type: 'work',
                role: 'Brand & Content Executive',
                company: 'XYZ Travel Company',
                period: '12/2025 - 07/2026',
                categories: [
                    'content',
                    'video',
                    'ads',
                    'tech'
                ],
                tasks: [
                    'Built the website from scratch with an admin system for Tours and Blogs; optimized Responsive & SEO',
                    'Planned a 1-year marketing strategy, allocated budget and managed brand assets',
                    'Shot and edited videos, designed social posts',
                    'Ran Facebook Ads and Google Ads'
                ],
                results: [
                    'Reached 800K+ views and 390K+ interactions after 1 month of ads',
                    'Google Ads CTR of 2.93%, 35K+ impressions, 3K+ visits'
                ]
            },
            {
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
            },
            {
                type: 'freelance',
                role: 'Content Creator, Social Media',
                company: 'Educational YouTube Channel',
                period: '09/2024 - 05/2025',
                categories: [
                    'content',
                    'video'
                ],
                tasks: [
                    'Shot and edited topic-based videos',
                    'Managed the YouTube channel: comments, copyright, videos'
                ],
                results: [
                    'Gained 500 subscribers and grew total channel views by 200%'
                ]
            },
            {
                type: 'freelance',
                role: 'Content Marketing, Designer',
                company: 'Music Center',
                period: '06/2024 - 09/2024',
                categories: [
                    'content',
                    'design',
                    'video'
                ],
                tasks: [
                    'Designed social posts, banners, standees and course materials',
                    'Edited Reels, TikTok and YouTube videos'
                ],
                results: [
                    'Grew Fanpage followers by 30%',
                    'Increased closed customers by 20%+'
                ]
            },
            {
                type: 'freelance',
                role: 'Freelancer',
                company: 'Upwork',
                period: '2023 - Present',
                categories: [
                    'content',
                    'design',
                    'tech'
                ],
                tasks: [
                    'Social Media Marketing, Presentation Design, Data Entry'
                ],
                results: [
                    'Completed 20+ jobs with 100% Job Success',
                    'Achieved Top Rated'
                ]
            }
        ]
    },
    experience: {
        title: 'Experience',
        code: 'experience',
        location: 'Ho Chi Minh City, Vietnam',
        about: [
            'I am a Marketer with 3+ years of experience in Branding and multi-platform content management. I love exploring the interfaces and inner workings of digital platforms to find the most natural and approachable way to deliver content to users.',
            'I am looking for opportunities at technology companies, hoping to use creative thinking to break down the barrier between engineering teams and customers.'
        ],
        stats: [
            {
                value: '3+',
                label: 'Years of experience'
            },
            {
                value: '20+',
                label: 'Projects completed'
            },
            {
                value: 'BA',
                label: 'in Marketing'
            }
        ],
        education: 'Ho Chi Minh City University of Industry (IUH)',
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
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1989oytsep459._.js.map