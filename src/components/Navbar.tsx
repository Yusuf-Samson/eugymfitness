import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-display text-3xl text-primary tracking-widest">
          EUGYM <span className="text-primary/70">FITNESS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg tracking-wider px-6"
          asChild
        >
          <a href="#membership">Join Now</a>
        </Button>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/98 border-t border-border/20 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-accent transition-colors uppercase tracking-wider text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg tracking-wider" asChild>
              <a href="#membership">Join Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
