import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Layers, Database, BrainCircuit, Wrench, Boxes } from "lucide-react";

const skillGroups = [
  {
    key: "languages",
    label: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript (ES6+)", "Dart", "PHP", "HTML5", "CSS3"],
  },
  {
    key: "frameworks",
    label: "Frameworks",
    icon: Layers,
    items: ["React.js", "Node.js", "Express.js", "Flutter", "Symfony", "Flask", "FastAPI"],
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    key: "ml",
    label: "ML / AI",
    icon: BrainCircuit,
    items: ["scikit-learn", "sentence-transformers", "Collaborative Filtering", "Image Classification"],
  },
  {
    key: "tools",
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ IDEA", "Postman", "Tailwind CSS"],
  },
  {
    key: "concepts",
    label: "Concepts",
    icon: Boxes,
    items: [
      "REST API Design",
      "OOP",
      "Full-Stack Development",
      "Microservice Architecture",
      "CRUD Applications",
      "JWT Authentication",
    ],
  },
];

const filters = ["all", ...skillGroups.map((g) => g.key)];
const filterLabels = { all: "All" };
skillGroups.forEach((g) => (filterLabels[g.key] = g.label));

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleGroups =
    activeFilter === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.key === activeFilter);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tools and technologies I reach for across full-stack, mobile, and AI-integrated
          development.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 capitalize",
                activeFilter === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {filterLabels[key]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.key}
                className="bg-card p-6 rounded-xl border border-border shadow-xs card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg font-display">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
