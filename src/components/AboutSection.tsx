import { Dumbbell, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Active Members" },
  { icon: Dumbbell, value: "12", label: "Weekly Classes" },
  { icon: Heart, value: "1+", label: "Years Strong" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-display text-lg tracking-widest">Our Story</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-6">
              From Street<br />
              <span className="text-primary">Workouts</span> to<br />
              a Movement
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Eugym started under an open sky in Aco Estate — a group of neighbours doing push-ups by the roadside every morning at 5:30am. No fancy equipment, just determination and a shared WhatsApp group.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Three years later, we're a full gym with proper equipment, certified trainers, and the same stubborn belief: fitness belongs to everybody. Whether you're a market woman, a tech bro, or a student — you're welcome here. We don't do gatekeeping.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-background">
                  <stat.icon className="mx-auto text-primary mb-2" size={28} />
                  <div className="font-display text-3xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <blockquote className="text-xl italic text-foreground leading-relaxed">
                "We didn't build Eugym for Instagram. We built it because our people needed a place to feel strong — body and mind. Come as you are."
              </blockquote>
              <p className="mt-4 font-display text-lg text-primary">— Coach Emeka, Founder</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-xl p-6">
                <span className="font-display text-2xl">5:30 AM</span>
                <p className="text-sm mt-1 opacity-80">Early bird sessions — the OG crew still shows up</p>
              </div>
              <div className="bg-accent text-accent-foreground rounded-xl p-6">
                <span className="font-display text-2xl">Naija Vibes</span>
                <p className="text-sm mt-1 opacity-80">Burna Boy on the speakers. Always.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
