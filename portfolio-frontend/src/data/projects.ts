export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "backend" | "fullstack";
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/projects/ecommerce.png",
    category: "fullstack",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/projects/taskapp.png",
    category: "frontend",
    techStack: ["React", "TypeScript", "Framer Motion", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: 3,
    title: "REST API Service",
    description:
      "A robust RESTful API service with authentication, rate limiting, and comprehensive documentation. Designed for scalability and security.",
    image: "/projects/api.png",
    category: "backend",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/yourusername/rest-api",
    liveUrl: "https://api-docs-demo.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance for showcasing creative work.",
    image: "/projects/portfolio.png",
    category: "frontend",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with WebSocket support, message encryption, file sharing, and group chat functionality.",
    image: "/projects/chat.png",
    category: "fullstack",
    techStack: ["React", "Node.js", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-demo.vercel.app",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with interactive charts, data visualization, and customizable reports for business intelligence.",
    image: "/projects/analytics.png",
    category: "frontend",
    techStack: ["React", "TypeScript", "Recharts", "D3.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://analytics-demo.vercel.app",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const;
