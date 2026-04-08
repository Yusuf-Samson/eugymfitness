import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Abuja Needs More Outdoor Fitness Spaces",
    excerpt: "From Millennium Park joggers to Jabi Lake cyclists, Abuja's fitness culture is growing — but where are the proper outdoor workout areas? We make the case for more community fitness zones.",
    date: "March 2026",
    category: "Community",
    readTime: "5 min read",
  },
  {
    title: "Eating Right on a Nigerian Budget: A Gym-Goer's Guide",
    excerpt: "You don't need imported protein powder when you have beans, eggs, and groundnuts. Coach Chinedu breaks down how to fuel your gains without breaking the bank.",
    date: "February 2026",
    category: "Nutrition",
    readTime: "7 min read",
  },
  {
    title: "How Boxing Became Abuja's Favourite Stress Reliever",
    excerpt: "Forget meditation apps. More and more young professionals in Abuja are turning to boxing classes to manage work stress. We talked to five of them.",
    date: "January 2026",
    category: "Wellness",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">From The Blog</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            Fitness <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Real stories, local insights, and no-nonsense advice from the Eugym community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors normal-case">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
