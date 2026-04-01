import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Download, FileText, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { sampleResume } from "../data/sampleResume";
import { templates } from "../data/templates";
import { templateComponents } from "../templates";

export default function Landing() {
  const featured = templates.slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section
        className="bg-background py-20 md:py-28"
        data-ocid="hero.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                ✨ 22+ Professional Templates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Build a Professional Resume that{" "}
                <span className="text-primary">Lands Interviews</span> in
                Minutes.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Choose from 22+ professionally designed templates. Edit in
                real-time, download as PDF, and get your dream job faster.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/builder" search={{ template: undefined }}>
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 px-8"
                    data-ocid="hero.primary_button"
                  >
                    Build Your Resume
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button
                    size="lg"
                    variant="outline"
                    data-ocid="hero.secondary_button"
                  >
                    Browse Templates
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> ATS
                  Optimized
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Free to
                  Use
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> PDF Export
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-xl" />
                <div
                  className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
                  style={{ width: 320, height: 420 }}
                >
                  <div
                    style={{
                      transform: "scale(0.404)",
                      transformOrigin: "top left",
                      width: 794,
                      pointerEvents: "none",
                    }}
                  >
                    {templateComponents["modern-blue"] &&
                      (() => {
                        const T = templateComponents["modern-blue"];
                        return <T data={sampleResume} />;
                      })()}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Template Gallery Preview */}
      <section
        className="py-20 bg-white"
        id="templates"
        data-ocid="templates.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Our Template Gallery
            </h2>
            <p className="text-muted-foreground">
              22+ professionally designed templates for every career stage and
              industry.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {featured.map((tmpl, i) => (
              <motion.div
                key={tmpl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <TemplateCard tmpl={tmpl} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/templates">
              <Button
                variant="outline"
                size="lg"
                data-ocid="templates.secondary_button"
              >
                View All 22 Templates →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-20 bg-background"
        id="features"
        data-ocid="features.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Features
            </h2>
            <p className="text-muted-foreground">
              Everything you need to create a standout resume.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "ATS Optimized",
                desc: "All templates are designed to pass Applicant Tracking Systems. Get your resume seen by real humans.",
                color: "text-green-500",
              },
              {
                icon: FileText,
                title: "22+ Templates",
                desc: "From minimalist to creative, corporate to academic — find the perfect style for your industry and career.",
                color: "text-primary",
              },
              {
                icon: Zap,
                title: "Easy to Use",
                desc: "Fill in your details and see live updates in real-time. No design skills needed. Export as PDF in one click.",
                color: "text-amber-500",
              },
              {
                icon: Download,
                title: "PDF Export",
                desc: "Download your resume as a print-ready PDF with perfect formatting, ready to send to employers.",
                color: "text-blue-500",
              },
              {
                icon: Star,
                title: "Live Preview",
                desc: "See exactly how your resume looks as you type. Switch between templates instantly without losing your data.",
                color: "text-purple-500",
              },
              {
                icon: CheckCircle2,
                title: "Save & Sync",
                desc: "Your resume data is securely saved on the blockchain. Access it anywhere, anytime.",
                color: "text-teal-500",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-border shadow-xs hover:shadow-sm transition-shadow"
              >
                <f.icon className={`w-8 h-8 ${f.color} mb-4`} />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" id="about" data-ocid="cta.section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Resume?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Join thousands of professionals who landed their dream job with
            ResuMe Pro.
          </p>
          <Link to="/builder" search={{ template: undefined }}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10 font-semibold"
              data-ocid="cta.primary_button"
            >
              Start Building for Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function TemplateCard({ tmpl }: { tmpl: (typeof templates)[0] }) {
  const Comp = templateComponents[tmpl.id];
  return (
    <Link to="/builder" search={{ template: tmpl.id } as any}>
      <div
        className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all cursor-pointer group"
        data-ocid="templates.item.1"
      >
        <div className="overflow-hidden" style={{ height: 200 }}>
          <div
            style={{
              transform: "scale(0.253)",
              transformOrigin: "top left",
              width: 794,
              pointerEvents: "none",
            }}
          >
            {Comp && <Comp data={sampleResume} />}
          </div>
        </div>
        <div className="p-3">
          <div className="font-medium text-sm text-foreground mb-1">
            {tmpl.name}
          </div>
          <Badge variant="secondary" className="text-xs mb-2">
            {tmpl.category}
          </Badge>
          <Button
            size="sm"
            className="w-full bg-primary text-white group-hover:bg-primary/90 text-xs mt-1"
          >
            Select Style
          </Button>
        </div>
      </div>
    </Link>
  );
}
