import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-20" />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="section-badge-icon">🧠</span>
            About Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
        >
          <span className="text-foreground">
            Built on RAG, MCP, and cutting-edge AI,{" "}
          </span>
          <span className="text-muted-foreground">
            Lumina is a decision support system committed to achieving exceptional knowledge retrieval...
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/NguyenVietMy/Lumina" target="_blank" rel="noopener noreferrer">
              Explore Lumina
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
