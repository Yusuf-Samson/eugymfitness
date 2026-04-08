import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₦15,000",
    period: "/month",
    description: "Perfect for beginners testing the waters",
    features: [
      "Access to Morning Flow class",
      "3 gym sessions per week",
      "Locker room access",
      "Community WhatsApp group",
    ],
    popular: false,
  },
  {
    name: "Grinder",
    price: "₦30,000",
    period: "/month",
    description: "For the regulars who show up rain or shine",
    features: [
      "Unlimited gym access",
      "All group classes included",
      "1 personal training session/month",
      "Nutrition tips from Chinedu",
      "Priority class booking",
      "Towel service",
    ],
    popular: true,
  },
  {
    name: "Champion",
    price: "₦50,000",
    period: "/month",
    description: "The full Eugym experience, no holding back",
    features: [
      "Everything in Grinder",
      "4 personal training sessions/month",
      "Custom workout plan",
      "Custom meal plan",
      "Guest passes (2/month)",
      "Free branded merch quarterly",
      "Early access to events",
    ],
    popular: false,
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding bg-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-display text-lg tracking-widest">Pricing</span>
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mt-2">
            Pick Your <span className="text-accent">Plan</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mt-4 max-w-xl mx-auto">
            No hidden fees. No contracts. Cancel anytime — but you won't want to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary border-2 border-accent scale-105"
                  : "bg-primary-foreground/5 border border-primary-foreground/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full font-display text-sm tracking-wider flex items-center gap-1">
                  <Star size={14} /> Most Popular
                </div>
              )}

              <h3 className="font-display text-3xl text-primary-foreground">{plan.name}</h3>
              <p className="text-primary-foreground/60 text-sm mt-1 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="font-display text-5xl text-primary-foreground">{plan.price}</span>
                <span className="text-primary-foreground/50 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                    <Check className="text-accent mt-0.5 shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-display text-lg tracking-wider ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20"
                }`}
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
