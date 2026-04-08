import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amina Bello",
    role: "Banker, Maitama Branch",
    quote: "I used to dread exercise. Now I drag my colleagues to Coach Ada's Sprint & Stretch every Monday. Eugym doesn't feel like a gym — it feels like family, but with more burpees.",
    stars: 5,
  },
  {
    name: "Obinna Nwosu",
    role: "Software Developer",
    quote: "As a remote worker, I was turning into a chair. Chinedu's Iron Hour got me moving again. The playlists alone are worth the membership — I've Shazam'd songs mid-deadlift.",
    stars: 5,
  },
  {
    name: "Fatima Abdullahi",
    role: "NYSC Corps Member",
    quote: "I joined for the aerobics, stayed for the community. The women in the 6pm class have become my Abuja family. Also — the boxing class is the best therapy I've ever had.",
    stars: 5,
  },
  {
    name: "Tunde Okafor",
    role: "Market Trader, Wuse",
    quote: "I thought gyms were for big boys. Eugym proved me wrong. Coach Emeka welcomed me like I was supposed to be there. Six months later, my knees don't creak anymore.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">Real Talk</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            What Our <span className="text-primary">People</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="text-accent fill-accent" size={16} />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display text-xl text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
