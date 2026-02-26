import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Globe, Code, MessageSquare, Database, Brain } from "lucide-react";

const floatingItems = [
  { icon: <FileText size={20} />, label: "PDF", delay: 0, x: -300, y: -150 },
  { icon: <Globe size={20} />, label: "Web", delay: 0.2, x: -200, y: -80 },
  { icon: <Code size={20} />, label: "Code", delay: 0.4, x: 200, y: -120 },
  { icon: <MessageSquare size={20} />, label: "Chat", delay: 0.6, x: 300, y: -60 },
  { icon: <Database size={20} />, label: "DB", delay: 0.8, x: -250, y: 50 },
  { icon: <Brain size={20} />, label: "AI", delay: 1, x: 250, y: 80 },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-10" />

      {/* Floating icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, duration: 0.6 }}
            className="absolute"
            style={{ left: `calc(50% + ${item.x}px)`, top: `calc(40% + ${item.y}px)` }}
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-lg"
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="section-badge-icon">⚡</span>
            Features
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-7xl font-bold mb-6"
        >
          Packed with Innovation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-muted-foreground text-lg mb-10"
        >
          Lumina is packed with cutting-edge features designed to
          elevate your AI workflow and knowledge management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/NguyenVietMy/Lumina" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
