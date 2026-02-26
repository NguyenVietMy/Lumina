import { motion } from "framer-motion";
import { Zap, Database, Globe, Cpu, Eye, BarChart3, Layers, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Database size={24} />,
    title: "RAG-Powered Chat",
    description: "Context-aware responses with semantic search, citations, and multi-turn memory.",
    visual: "chat",
  },
  {
    icon: <Globe size={24} />,
    title: "Multi-Source Ingestion",
    description: "Ingest PDFs, DOCX, web content, and GitHub repos into vector collections.",
    visual: "ingestion",
  },
  {
    icon: <Cpu size={24} />,
    title: "MCP Server Integration",
    description: "Seamless integration with Cursor and Claude Desktop via Model Context Protocol.",
    visual: "mcp",
  },
];

const capabilities = [
  { icon: <Eye size={14} />, title: "Real-Time Retrieval", desc: "Instant semantic search across your knowledge base." },
  { icon: <Layers size={14} />, title: "Smart Chunking", desc: "Language-aware splitting for code and documents." },
  { icon: <BarChart3 size={14} />, title: "Hierarchical Summaries", desc: "Efficient batch summarization with ~22 LLM calls for 500 chunks." },
  { icon: <MessageSquare size={14} />, title: "Configurable RAG", desc: "Adjustable n_results, similarity threshold, and context tokens." },
];

const FeatureCardsSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Zap size={20} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-8">{feature.description}</p>

              {/* Visual area */}
              <div className="rounded-xl border border-border bg-secondary/50 p-6 min-h-[180px] flex items-center justify-center">
                {feature.visual === "chat" && (
                  <div className="space-y-3 w-full">
                    {["ChromaDB", "PostgreSQL", "OpenAI", "FastMCP"].map((tech, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + j * 0.1 }}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                )}
                {feature.visual === "ingestion" && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["PDF", "DOCX", "TXT", "Markdown", "Web", "GitHub"].map((type, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + j * 0.1 }}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {type}
                      </motion.span>
                    ))}
                  </div>
                )}
                {feature.visual === "mcp" && (
                  <div className="text-center space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-xs text-primary"
                    >
                      MCP Protocol
                    </motion.div>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(8)].map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scaleY: 0.3 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + j * 0.05, duration: 0.3 }}
                          className="w-1 bg-primary/40 rounded-full"
                          style={{ height: `${12 + Math.random() * 24}px` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">{cap.icon}</span>
                <h4 className="font-display font-semibold text-foreground">{cap.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
