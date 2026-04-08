import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-display text-3xl text-primary tracking-widest">
              EUGYM <span className="text-primary/70">FITNESS</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Born from Abuja's streets. Built for our community. Eugym Fitness — where every rep counts and everyone belongs.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-accent transition-colors">Classes</a></li>
              <li><a href="#trainers" className="hover:text-accent transition-colors">Trainers</a></li>
              <li><a href="#membership" className="hover:text-accent transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-3">Classes</h4>
            <ul className="space-y-2 text-sm">
              <li>Aerobics</li>
              <li>Boxing</li>
              <li>Sprint & Stretch</li>
              <li>Iron Hour</li>
              <li>Morning Flow</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-sm mt-4">@eugymfitness</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Eugym Fitness. All rights reserved. Made with 💪 in Abuja.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
