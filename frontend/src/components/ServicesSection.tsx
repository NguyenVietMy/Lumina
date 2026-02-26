import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BookOpen, Code2, Users, Building2, Wrench } from "lucide-react";

const services = [
  { icon: <BookOpen size={20} />, title: "Students", desc: "Study assistant from lecture notes, textbooks; research companion; exam prep." },
  { icon: <Code2 size={20} />, title: "Developers", desc: "Codebase documentation from GitHub; API docs from websites; IDE integration via MCP." },
  { icon: <Bot size={20} />, title: "Researchers", desc: "Literature review; query across papers; collaborative knowledge bases." },
  { icon: <Users size={20} />, title: "Content Creators", desc: "Content research; fact-checking; reference knowledge bases." },
  { icon: <Building2 size={20} />, title: "Businesses", desc: "Internal docs; customer support KBs; onboarding; compliance archives." },
  { icon: <Wrench size={20} />, title: "Technical Teams", desc: "Architecture docs; troubleshooting; best practices; integration guides." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Color-shifting purple gradient background */}
      <div className="absolute inset-6 rounded-3xl color-shift-bg opacity-60" />
      <div className="absolute inset-0 aurora-layer" style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(262 83% 55% / 0.5) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-6 rounded-3xl border border-primary/10" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="section-badge-icon">⚙️</span>
            Services
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">AI-Powered Services for</span>
          <br />
          <span className="text-gradient">Future-Driven Workflows</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-muted-foreground text-lg mb-12"
        >
          Our cutting-edge RAG solutions are designed to transform how you work,
          enhance efficiency, and drive innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/NguyenVietMy/Lumina" target="_blank" rel="noopener noreferrer">
              Explore Use Cases
            </a>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 text-left hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary">{service.icon}</span>
                <h3 className="font-display font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
