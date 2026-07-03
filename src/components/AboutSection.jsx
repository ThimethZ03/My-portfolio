import { Cpu, Smartphone, Sparkles, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-display">
              Computer Science Undergraduate & Software Engineer-in-Training
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science undergraduate at the University of Westminster
              (IIT, Colombo), seeking a Software Engineer internship to put my
              technical skills to work in a professional environment. I build across
              full-stack web, mobile, and AI-integrated systems, with strong
              proficiency in Java, Python, JavaScript, and Flutter.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about designing practical, user-focused solutions and
              constantly learning new technologies — from NLP-based recommendation
              engines to cross-platform mobile apps — while contributing effectively
              to collaborative teams.
            </p>

            <div className="gradient-border p-5 card-hover text-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">BSc (Hons) Computer Science</h4>
                  <p className="text-sm text-muted-foreground">
                    University of Westminster, UK — affiliated with Informatics
                    Institute of Technology (IIT), Colombo · 2025 – Present
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Thimeth_Zoysa_CV.pdf"
                download="Thimeth_Zoysa_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building end-to-end MERN and Symfony applications with real-time
                    UIs, secure auth, and clean REST APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI-Integrated Systems</h4>
                  <p className="text-muted-foreground">
                    Applying NLP embeddings, collaborative filtering, and image
                    classification to solve practical problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Crafting cross-platform Flutter apps with multilingual
                    interfaces for real communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
