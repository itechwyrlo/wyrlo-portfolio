export interface Project {
  id: string
  name: string
  fileName: string
  summary: string
  description: string
  highlights: string[]
  stack: string[]
  links: {
    demo?: string
    repo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'apex-booking',
    name: 'Apex Booking',
    fileName: 'ApexBooking.sln',
    summary:
      'A multi-tenant vendor booking system with a React and TypeScript single page app, served from an ASP.NET Core backend that applies Domain-Driven Design and CQRS.',
    description:
      'Apex Booking is a single page application that lets multiple independent vendors manage their own bookings, services, and availability inside one application. The frontend is built with React and TypeScript, and is built and served from the ASP.NET Core app\'s wwwroot, so the API and the SPA deploy together as one unit. On the backend, the project is structured around Domain-Driven Design, with each business area modeled as its own bounded context, and CQRS to separate read and write paths for cleaner, more testable code. Data is stored in SQL Server.',
    highlights: [
      'Built the SPA frontend with React and TypeScript, compiled and served from the ASP.NET Core app\'s wwwroot.',
      'Modeled vendor, booking, and scheduling domains using DDD, with clear boundaries between contexts.',
      'Applied CQRS to separate commands (create or update bookings) from queries (availability and history).',
      'Designed a multi-tenant data structure so each vendor\'s data stays isolated and secure.',
      'Deployed the app to MonsterASP.NET cloud hosting.',
      'Set up a GitHub Actions pipeline to build and deploy automatically on every push to the main branch.'
    ],
    stack: ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'CQRS', 'DDD', 'GitHub Actions'],
    links: {
      demo: 'https://apexbooking.runasp.net/'
    }
  },
  {
    id: 'iponmo',
    name: 'IponMo',
    fileName: 'IponMo.app',
    summary:
      'A Progressive Web App for managing paluwagan groups, with real-time messaging so members can track contributions and stay in sync.',
    description:
      'IponMo is a Progressive Web App built to help small groups manage a paluwagan, a rotating savings and credit arrangement common in the Philippines. Members can view group schedules, track contributions and payouts, and message each other in real time. The frontend is built with React and TypeScript, and the app is installable on mobile devices through PWA support.',
    highlights: [
      'Built the frontend with React and TypeScript for a typed, maintainable codebase.',
      'Implemented real-time messaging so group members can communicate inside the app.',
      'Configured the app as a Progressive Web App, so it can be installed and used like a native app.',
      'Deployed the frontend to Vercel.',
      'Set up a GitHub Actions pipeline for continuous integration and deployment.'
    ],
    stack: ['React', 'TypeScript', 'PWA', 'Real-time messaging', 'Vercel', 'GitHub Actions'],
    links: {
      demo: 'https://iponmo.vercel.app/login'
    }
  }
]
