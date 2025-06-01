import { ContentInfo } from "../types";
import webdev_v2 from '../assets/images/png/services/webdev-v2.png'
import ai_v2 from '../assets/images/png/services/ai-v2.png'
import backdev_v2 from '../assets/images/png/services/backdev-v2.png'
import bulb_v2 from '../assets/images/png/services/bulb-v2.png'
import performance_v2 from '../assets/images/png/services/performance-v2.png'
import mobile_v2 from '../assets/images/png/services/mobile-v2.png'
import design_v2 from '../assets/images/png/services/design-v2.png'
import devops_v2 from '../assets/images/png/services/devops-v2.png'
import seo_v2 from '../assets/images/png/services/seo-v2.png'
import graphics_v2 from '../assets/images/png/services/graphics-v2.png'

// Initial manual services
export const serviceContent: ContentInfo[] = [
    {
        title: 'Web Development',
        content: 'Custom web applications with modern technologies and scalable architecture',
        icon: 'webdev',
        points: [
            'React, Next.js & Remix',
            'TypeScript, JavaScript & Python',
            'Performance Optimization'
        ],
        id: 0,
        url: 'web-development'
    },
    {
        title: 'Mobile Apps',
        content: 'Native and cross-platform mobile solutions for iOS and Android',
        icon: 'mobile',
        points: [
            'React Native',
            'Flutter',
            'Native Development'
        ],
        id: 1,
        url: 'mobile-apps'
    },
    {
        title: 'UI/UX Design',
        content: 'Beautiful and intuitive user experiences that drive engagement',
        icon: 'design',
        points: [
            'User Research',
            'Prototyping',
            'Design Systems'
        ],
        id: 2,
        url: 'ui-ux-design'
    },
    {
        title: 'Backend Solutions',
        content: 'Robust server architecture and API development for scalable systems',
        icon: 'backdev',
        points: [
            'Cloud Infrastructure',
            'Database Design',
            'API Development'
        ],
        id: 3,
        url: 'backend-solutions'
    },
    {
        title: 'DevOps & Automation',
        content: 'Streamline development and deployment pipelines with CI/CD and infrastructure automation',
        icon: 'devops',
        points: [
            'CI/CD Pipelines',
            'Infrastructure as Code',
            'Containerization & Orchestration'
        ],
        id: 4,
        url: 'devops-automation'
    },
    {
        title: 'Graphic Design & Branding',
        content: 'Create strong brand identities and visual assets that leave an impact',
        icon: 'graphics',
        points: [
            'Logo & Brand Identity',
            'Marketing Collateral',
            'Illustration & Animation'
        ],
        id: 8,
        url: 'graphic-design-branding'
    },
    {
        title: 'Performance',
        content: 'Lightning-fast and optimized solutions for maximum efficiency',
        icon: 'performance',
        points: [
            'Speed Optimization',
            'SEO',
            'Analytics'
        ],
        id: 5,
        url: 'performance'
    },
    {
        title: 'IT Solutions & Support',
        content: 'Reliable IT services and support to keep your business running smoothly',
        icon: 'bulb',
        points: [
            'System Maintenance',
            'Remote Support',
            'Security & Monitoring'
        ],
        id: 6,
        url: 'it-solutions-support'
    },
    {
        title: 'SEO & Digital Marketing',
        content: 'Drive traffic and conversions with tailored SEO and marketing strategies',
        icon: 'seo',
        points: [
            'Search Engine Optimization',
            'Content Marketing',
            'Social Media Strategy'
        ],
        id: 7,
        url: 'seo-digital-marketing'
    },
    {
        title: 'AI & Automation',
        content: 'Empower your systems with AI-powered tools and workflow automation',
        icon: 'ai',
        points: [
            'Chatbots & NLP',
            'Process Automation',
            'Custom AI Solutions'
        ],
        id: 9,
        url: 'ai-automation'
    }
];

export const detailedPageData = [
    {
        flip: {
            icon: webdev_v2,
            content: 'Building Digital Dreams into Reality'
        },
        head: [
            'Web Development',
            'Transform your vision into stunning, high-performance web applications that engage users and drive business growth.'
        ],
        offer: [
            'code',
            'Modern Framework',
            'React, Next.js, and TypeScript for robust applications',
            ';',
            'light',
            'Performance Optimized',
            'Lightning-fast loading with SEO-friendly architecture',
            ';',
            'responsive',
            'Responsive Design',
            'Perfect experience across all devices and screen sizes',
            ';',
            'shield',
            'Security First',
            'Built with security best practices and data protection',
            ';',
            'stack',
            'Scalable Backend',
            'Robust database solutions that grow with your business',
            ';',
            'setting',
            'Easy Maintenance',
            'Clean code structure for easy updates and modifications'
        ],
        choose: [
            'goal',
            'Goal-Oriented Development',
            'Every line of code serves your business objectives. We focus on creating solutions that drive real results and meet your specific requirements.',
            ';',
            'rocket',
            'Lightning Fast Performance',
            'Optimized for speed and performance with modern technologies. Your users will enjoy seamless experiences that keep them engaged.',
            ';',
            'users',
            'User-Centric Design',
            'Designed with your audience in mind. We create intuitive interfaces that users love and that convert visitors into customers.'
        ],
        process: [
            'bulb',
            'Discovery & Planning',
            'We dive deep into understanding your vision, business goals, and target audience to create a comprehensive project roadmap.',
            'Requirements gathering, competitor analysis, technology stack selection, and project timeline creation.',
            ';',
            'pencil',
            'Design & Wireframing',
            'Creating user-friendly wireframes and visual concepts that align with your brand and user expectations.',
            'User experience design, visual mockups, responsive layouts, and interactive prototypes.',
            ';',
            'code',
            'Development & Coding',
            'Building your application with modern technologies, clean code practices, and scalable architecture.',
            'Frontend development, backend integration, database setup, and API development.',
            ';',
            'shield',
            'Testing & Quality Assurance',
            'Rigorous testing across devices, browsers, and scenarios to ensure flawless functionality.',
            'Unit testing, integration testing, performance testing, and security audits.',
            ';',
            'rocket',
            'Launch & Support',
            'Smooth deployment with ongoing support to ensure your application runs perfectly in production.',
            'Domain setup, hosting configuration, monitoring setup, and maintenance support.'
        ],
        technologies: [
            
        ]
    }
]