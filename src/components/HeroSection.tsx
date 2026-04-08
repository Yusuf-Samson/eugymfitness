import heroImg from "@/assets/hero-gym.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Street workout community in Abuja"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
          <Flame className="text-accent" size={16} />
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Aco Estate, Abuja</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Sweat.<br />
          <span className="text-accent">Grind.</span><br />
          Level Up.
        </h1>

        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Born from the streets of Abuja. Eugym Fitness brings raw energy, community spirit, and real results — no shortcuts, no pretending.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-xl tracking-wider px-8 py-6 animate-pulse-glow"
            asChild
          >
            <a href="#membership">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display text-xl tracking-wider px-8 py-6"
            asChild
          >
            <a href="#classes">Explore Classes</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
