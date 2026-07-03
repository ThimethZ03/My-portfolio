import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const fullText = "Hi, I'm Thimeth Zoysa";

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setDisplayedText(fullText.substring(0, currentIndex - 1));
        } else {
          // Finished deleting, pause then start typing again
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
          }, 500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, isPaused, fullText]);

  // Render typed text with name highlighting
  const renderTypedText = () => {
    const nameStart = displayedText.indexOf("Thimeth");
    
    if (nameStart === -1) {
      return <span>{displayedText}</span>;
    }
    
    const beforeName = displayedText.substring(0, nameStart);
    const nameText = displayedText.substring(nameStart);
    
    return (
      <span>
        {beforeName}
        <span className="text-primary">{nameText}</span>
      </span>
    );
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 sm:py-0"
    >
      <div className="hero-avatar">
        <div className="hero-avatar-inner">
          <img src="./others/dp.jpg" alt="profile.jpg" className="avatar-img"/>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <p className="font-mono text-sm md:text-base text-primary tracking-widest uppercase opacity-0 animate-fade-in-delay-1">
            Computer Science Undergraduate
          </p>

          <div className="min-h-16 sm:h-20 md:h-24 flex items-center justify-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight font-display break-words">
              {renderTypedText()}
              <span 
                className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-primary ml-1`}
              >
                |
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build full-stack, mobile, and AI-integrated software — from sprint
            management platforms with NLP-driven recommendations to cross-platform
            apps that solve real-world problems. Currently looking for a Software
            Engineer internship.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
