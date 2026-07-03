import { ArrowRight, ExternalLink, Github, BrainCircuit, Smartphone, ShoppingBag, Server, MonitorSmartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Agile Task Recommendation System",
    category: "MSc Research • 2026",
    description:
      "Full-stack MERN sprint management platform with a Python ML microservice that matches tasks to developer skill profiles using sentence-transformer embeddings, collaborative filtering, and a capacity-aware scoring engine that retrains on live feedback each sprint.",
    tags: ["React", "Node.js", "MongoDB", "Flask", "sentence-transformers", "scikit-learn"],
    icon: BrainCircuit,
    gradient: "from-sky-500 to-violet-600",
    image: "/projects/Agile.png",
    featured: true,
    demoUrl: null,
    githubUrl: "https://github.com/ThimethZ03",
  },
  {
    id: 2,
    title: "Govi Sahaya — Agriculture Support App",
    category: "Mobile App • 2026",
    description:
      "Cross-platform Flutter app that uses AI image classification to detect crop disease and give personalised treatment guidance, with a bilingual Sinhala/English interface, seasonal alerts, and a farming knowledge library for rural communities.",
    tags: ["Flutter", "Dart", "AI Image Classification"],
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-600",
    image: "/projects/Govi.png",
    demoUrl: null,
    githubUrl: "https://github.com/ThimethZ03",
  },
  {
    id: 3,
    title: "Marketplace Web Application",
    category: "Web App • 2025",
    description:
      "Full-featured marketplace built with Symfony, with CRUD listings, user authentication, role-based access control, and a Symfony ORM–backed MySQL database with secure session management and form validation.",
    tags: ["PHP", "Symfony", "MySQL", "JavaScript"],
    icon: ShoppingBag,
    gradient: "from-amber-500 to-orange-600",
    image: "/projects/Market Place.png",
    demoUrl: null,
    githubUrl: "https://github.com/ThimethZ03",
  },
  {
    id: 4,
    title: "SmartCampus API — Room & Sensor Management",
    category: "Backend API • 2025",
    description:
      "RESTful API for managing rooms, sensors, and real-time sensor data using a layered MVC architecture in Java, with full CRUD operations, clean API contracts, exception handling, and logging.",
    tags: ["Java", "JAX-RS", "REST API"],
    icon: Server,
    gradient: "from-rose-500 to-pink-600",
    image: "/projects/smart Campus.png",
    demoUrl: null,
    githubUrl: "https://github.com/ThimethZ03",
  },
  {
    id: 5,
    title: "Employee Management System",
    category: "Desktop App • 2025",
    description:
      "Modern desktop CRUD application built with JavaFX and JDK 21, featuring a modular OOP design, search and filter tools, input validation, and persistent file storage.",
    tags: ["Java 21", "JavaFX", "Scene Builder"],
    icon: MonitorSmartphone,
    gradient: "from-indigo-500 to-blue-600",
    image: "/projects/Employee.png",
    demoUrl: null,
    githubUrl: "https://github.com/ThimethZ03/Employee-Management-System",
  },
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  return (
    <div
      className={`group bg-card rounded-xl overflow-hidden border border-border shadow-xs card-hover ${
        project.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon
              className="h-16 w-16 text-white/90 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/25">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1 border-t border-border/60 pt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A mix of full-stack, mobile, and AI-integrated builds — from an MSc research
          system to practical apps for real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit inline-flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ThimethZ03"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
