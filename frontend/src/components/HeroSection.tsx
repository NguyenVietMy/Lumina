import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated color-shifting background */}
      <div className="absolute inset-0 color-shift-bg" />
      
      {/* Aurora layers */}
      <div className="absolute inset-0 aurora-layer" style={{
        background: "radial-gradient(ellipse at 30% 80%, hsl(262 83% 45% / 0.4) 0%, transparent 50%)"
      }} />
      <div className="absolute inset-0 aurora-layer-2" style={{
        background: "radial-gradient(ellipse at 70% 60%, hsl(280 80% 40% / 0.3) 0%, transparent 50%)"
      }} />
      
      {/* Color wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] overflow-hidden">
        <div className="wave-layer absolute inset-0" style={{
          background: "linear-gradient(90deg, transparent, hsl(262 83% 50% / 0.4), hsl(280 70% 45% / 0.3), transparent)",
          width: "200%",
        }} />
      </div>

      {/* Glow spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" style={{
        background: "radial-gradient(ellipse at center bottom, hsl(262 83% 55% / 0.35) 0%, hsl(280 70% 40% / 0.15) 40%, transparent 70%)",
      }} />
      
      <div className="container relative z-10 mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="section-badge-icon">
              <Sparkles size={14} />
            </span>
            Next-Gen RAG Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <span className="text-foreground">AI-Driven Knowledge</span>
          <br />
          <span className="text-gradient">Redefining the Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl text-muted-foreground text-lg mb-10"
        >
          Revolutionize your vibe-coding workflow with our intelligent knowledge base
          <br className="hidden md:block" />
          that can scale literally infinitely. Powered by RAG & MCP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/NguyenVietMy/Lumina" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
          <Button variant="hero" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            What is Lumina?
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
