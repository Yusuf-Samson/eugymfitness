import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon. 💪");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            Come <span className="text-primary">Find Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">Location</h4>
                  <p className="text-muted-foreground">Beside NUT head office, Aco Estate, Abuja, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">Phone / WhatsApp</h4>
                  <p className="text-muted-foreground">+234 801 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@eugymfitness.ng</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">Hours</h4>
                  <p className="text-muted-foreground">Mon – Sat: 5:30 AM – 9:00 PM</p>
                  <p className="text-muted-foreground">Sun: 7:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map embed - Beside NUT Guest House, Aco Estate, Abuja */}
            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Eugym Fitness Location"
                src="https://www.google.com/maps?q=NUT+Guest+House+Aco+Estate+Lugbe+Abuja&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-3xl text-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground mb-6">Interested in a class? Got questions? We respond faster than Coach Ada runs.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
                <Input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border"
                />
                <Textarea
                  placeholder="Your message — ask about classes, membership, or just say hi!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background border-border"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
