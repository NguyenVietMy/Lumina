import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    year: "2025",
    name: "RAG Pipeline",
    features: ["ChromaDB Vectors", "OpenAI Embeddings", "Semantic Search", "Citation System"],
    tags: ["Backend", "AI/ML"],
  },
  {
    year: "2025",
    name: "MCP Server",
    features: ["Cursor Integration", "Claude Desktop", "Tool Registry", "Config Management"],
    tags: ["Protocol", "IDE"],
  },
  {
    year: "2025",
    name: "Web Scraper",
    features: ["Sitemap Crawling", "Recursive Links", "Smart Chunking", "Crawl4AI Engine"],
    tags: ["Scraping", "Ingestion"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="section-badge-icon">📂</span>
            Portfolio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">Showcasing Core</span>
          <br />
          <span className="text-gradient">Modules & Architecture.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-muted-foreground text-lg mb-6"
        >
          Each module is production-ready — built with precision, tested for scale,
          and documented for clarity.
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
              View Source Code
            </a>
          </Button>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-8 text-left hover:border-primary/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-md border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground font-mono">
                      {project.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">{project.name}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {project.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="flex gap-3">
                  <div className="w-48 h-32 rounded-xl bg-secondary/80 border border-border flex items-center justify-center">
                    <div className="text-3xl font-display font-bold text-muted-foreground/30">
                      {project.name.split(" ").map(w => w[0]).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
