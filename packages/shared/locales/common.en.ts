type LocaleConfig = {
    footerFramework: string
    skillsFramework: string
    stackFramework: string
}

type LocaleProject = {
    name: string
    summary: string
    stack: string[]
}

export type Locale = {
    app: {
        eyebrow: string
        footer: string
    }
    nav: {
        home: string
        cv: string
        projects: string
    }
    homePage: {
        title: string
        heading: string
        intro: string
        findHereHeading: string
        findHereItems: string[]
    }
    cvPage: {
        title: string
        intro: string
        highlightsHeading: string
        highlights: string[]
        skillsHeading: string
        skills: string[]
    }
    projectsPage: {
        title: string
        heading: string
        intro: string
        projects: LocaleProject[]
    }
    notFoundPage: {
        title: string
        heading: string
        body: string
    }
}

export function createLocale(config: LocaleConfig): Locale {
    return {
        app: {
            eyebrow: 'Personal Site',
            footer: `Built with ${config.footerFramework}, Vite, pnpm, Oxlint and Oxfmt.`,
        },
        nav: {
            home: 'Home',
            cv: 'CV',
            projects: 'My Projects',
        },
        homePage: {
            title: 'Andrey Parfenov',
            heading: 'Hi, I am Andrey.',
            intro:
                'I build products and tools that are fast, useful, and thoughtful. This space is my digital business card with a compact overview of who I am and what I build.',
            findHereHeading: 'What you can find here',
            findHereItems: [
                'Career highlights',
                'Technical strengths',
                'Selected projects',
                'Contact direction',
            ],
        },
        cvPage: {
            title: 'CV · Andrey Parfenov',
            intro:
                'Engineer focused on shipping reliable experiences with clean UX and maintainable code.',
            highlightsHeading: 'Core highlights',
            highlights: [
                'Product engineering across frontend and backend',
                'Performance-first architecture and tooling',
                'Clear communication with cross-functional teams',
            ],
            skillsHeading: 'Skills',
            skills: [
                'TypeScript',
                config.skillsFramework,
                'Node.js',
                'PostgreSQL',
                'CI/CD',
            ],
        },
        projectsPage: {
            title: 'Projects · Andrey Parfenov',
            heading: 'My Projects',
            intro: 'A shortlist of projects that demonstrate scope, impact, and craft.',
            projects: [
                {
                    name: 'Realtime Analytics Dashboard',
                    summary:
                        'A responsive dashboard for monitoring product events and conversion funnels in near real time.',
                    stack: ['TypeScript', config.stackFramework, 'WebSocket'],
                },
                {
                    name: 'Developer Workflow CLI',
                    summary:
                        'A command line tool that standardized project bootstrap, quality checks, and release automation.',
                    stack: ['Node.js', 'TypeScript', 'GitHub Actions'],
                },
                {
                    name: 'Knowledge Base Search',
                    summary:
                        'An internal semantic search tool to make technical documentation easier to discover and maintain.',
                    stack: ['PostgreSQL', 'API Design', 'UX Writing'],
                },
            ],
        },
        notFoundPage: {
            title: 'Not Found · Andrey Parfenov',
            heading: 'Page not found',
            body: 'That page does not exist. Use the navigation to get back on track.',
        },
    }
}
