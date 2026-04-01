import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { sampleResume } from "../data/sampleResume";
import { categories, templates } from "../data/templates";
import { templateComponents } from "../templates";

export default function Templates() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = templates.filter((t) => {
    const matchCat = cat === "All" || t.category === cat;
    const matchQ =
      !q ||
      t.name.toLowerCase().includes(q.toLowerCase()) ||
      t.category.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <main className="min-h-screen bg-background" data-ocid="templates.page">
      <div className="bg-white border-b border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Resume Template Gallery
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            22+ professionally designed templates for every career and industry.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10"
              data-ocid="templates.search_input"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-primary text-white"
                  : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
              }`}
              data-ocid="templates.tab"
            >
              {c}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          data-ocid="templates.list"
        >
          {filtered.map((tmpl, i) => {
            const Comp = templateComponents[tmpl.id];
            return (
              <motion.div
                key={tmpl.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all group cursor-pointer"
                data-ocid={`templates.item.${i + 1}`}
              >
                {/* Mini preview */}
                <div
                  className="overflow-hidden"
                  style={{ height: 220, background: "#f9f9f9" }}
                >
                  <div
                    style={{
                      transform: "scale(0.277)",
                      transformOrigin: "top left",
                      width: 794,
                      pointerEvents: "none",
                    }}
                  >
                    {Comp && <Comp data={sampleResume} />}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {tmpl.name}
                  </div>
                  <Badge variant="secondary" className="text-xs mb-3">
                    {tmpl.category}
                  </Badge>
                  <p className="text-xs text-muted-foreground mb-3">
                    {tmpl.description}
                  </p>
                  <Link to="/builder" search={{ template: tmpl.id } as any}>
                    <Button
                      size="sm"
                      className="w-full bg-primary text-white hover:bg-primary/90 text-xs"
                      data-ocid="templates.primary_button"
                    >
                      Use This Template
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="templates.empty_state"
          >
            <p className="text-lg">No templates found matching your search.</p>
            <button
              type="button"
              onClick={() => {
                setCat("All");
                setQ("");
              }}
              className="text-primary underline mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
