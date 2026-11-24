const aerobicsImg = "/images/aero.jpg";
const boxingImg = "/images/boxing.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Flame, Zap, Footprints, Dumbbell, Wind } from "lucide-react";

const classes = [
  {
    name: "Aerobics",
    tagline: "Move ya body, no dull moment",
    description: "High-energy dance-fitness that blends Afrobeats rhythms with cardio drills. You'll be sweating and smiling at the same time.",
    schedule: "Mon / Wed / Fri — 6:00 PM",
    intensity: "Medium-High",
    icon: Zap,
    image: aerobicsImg,
    featured: true,
  },
  {
    name: "Boxing",
    tagline: "Throw punches, release stress",
    description: "Learn real boxing technique while torching calories. Coach Chinedu doesn't play — but he'll make you feel like a champion.",
    schedule: "Tue / Thu / Sat — 7:00 AM",
    intensity: "High",
    icon: Flame,
    image: boxingImg,
    featured: true,
  },
  {
    name: "Sprint & Stretch",
    tagline: "Speed meets flexibility",
    description: "Coach Ada's signature class. Short explosive sprints followed by deep stretching routines. Perfect for runners and desk workers alike.",
    schedule: "Mon / Wed / Fri — 7:00 AM",
    intensity: "Medium",
    icon: Footprints,
    image: null,
    featured: false,
  },
  {
    name: "Iron Hour",
    tagline: "Heavy lifting, heavy vibes",
    description: "Structured weightlifting with Chinedu's curated playlists. Deadlifts hit different when Wizkid is playing.",
    schedule: "Tue / Thu / Sat — 5:30 PM",
    intensity: "High",
    icon: Dumbbell,
    image: null,
    featured: false,
  },
  {
    name: "Morning Flow",
    tagline: "Calm before the hustle",
    description: "Gentle yoga-inspired movement to start your day right. Open to all levels, even if you can't touch your toes.",
    schedule: "Daily — 5:30 AM",
    intensity: "Low",
    icon: Wind,
    image: null,
    featured: false,
  },
];

const ClassesSection = () => {
  return (
    <section id="classes" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">What We Offer</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            Our <span className="text-primary">Classes</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Every class is designed with Abuja energy in mind — real music, real sweat, real people.
          </p>
        </div>

        {/* Featured classes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {classes.filter(c => c.featured).map((cls) => (
            <div key={cls.name} className="group relative overflow-hidden rounded-2xl">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <cls.icon className="text-accent" size={20} />
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">{cls.tagline}</span>
                </div>
                <h3 className="font-display text-4xl text-primary-foreground mb-2">{cls.name}</h3>
                <p className="text-primary-foreground/70 mb-3">{cls.description}</p>
                <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
                  <span className="flex items-center gap-1"><Clock size={14} /> {cls.schedule}</span>
                  <span className="flex items-center gap-1"><Flame size={14} /> {cls.intensity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other classes */}
        <div className="grid md:grid-cols-3 gap-6">
          {classes.filter(c => !c.featured).map((cls) => (
            <div key={cls.name} className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cls.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-1">{cls.name}</h3>
              <p className="text-sm text-accent font-medium uppercase tracking-wider mb-3">{cls.tagline}</p>
              <p className="text-muted-foreground text-sm mb-4">{cls.description}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12} /> {cls.schedule}</span>
                <span className="flex items-center gap-1"><Flame size={12} /> {cls.intensity}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg tracking-wider px-8" asChild>
            <a href="#contact">Book a Free Trial Class</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
