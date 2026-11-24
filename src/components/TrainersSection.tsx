const adaImg = "/images/female_gym_coach.jpg";
const chineduImg = "/images/black_gym_coach.jpg";
import { Instagram, Music, Trophy, Zap } from "lucide-react";

const trainers = [
  {
    name: "Coach Ada",
    title: "Sprint & Stretch Instructor",
    image: adaImg,
    bio: "Former state-level sprinter who traded the track for the gym floor. Ada's classes are intense but joyful — she believes fitness should make you feel alive, not punished. Her 'Sprint & Stretch' class is the most booked at Eugym.",
    quirk: "Always wears mismatched socks. Says it's her signature move.",
    icon: Trophy,
    specialties: ["Speed Training", "Flexibility", "Rehabilitation"],
  },
  {
    name: "Coach Chinedu",
    title: "Weightlifting & Boxing Coach",
    image: chineduImg,
    bio: "Chinedu doesn't just coach — he curates. Every session comes with a custom playlist (heavy Afrobeats, some old-school hip hop). He believes the right song at the right rep can change your whole workout.",
    quirk: "Has a playlist for every muscle group. Leg day = Fela Kuti only.",
    icon: Music,
    specialties: ["Strength Training", "Boxing", "Nutrition Planning"],
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">Meet The Squad</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            Your <span className="text-primary">Trainers</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Not just coaches — they're community builders, playlist curators, and the reason you keep coming back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <h3 className="font-display text-4xl text-primary-foreground">{trainer.name}</h3>
                  <p className="text-accent font-medium uppercase tracking-wider text-sm">{trainer.title}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">{trainer.bio}</p>

              <div className="bg-accent/15 border border-accent/30 rounded-lg p-4 mb-4 flex items-start gap-3">
                <trainer.icon className="text-accent mt-0.5 shrink-0" size={20} />
                <p className="text-foreground text-sm italic">"{trainer.quirk}"</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((s) => (
                  <span key={s} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
