import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            lumina<span className="text-gradient-purple">.</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Lumina. RAG-based decision support system.
        </p>
        <motion.a
          href="https://github.com/NguyenVietMy/Lumina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          GitHub →
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
