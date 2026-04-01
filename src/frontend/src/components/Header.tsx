import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Features", href: "/#features" },
    { label: "Templates", href: "/templates" },
    { label: "Builder", href: "/builder" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-border shadow-xs no-print"
      data-ocid="header.section"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-ocid="header.link"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-foreground">ResuMe Pro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="header.link"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/builder" search={{ template: undefined }}>
            <Button
              data-ocid="header.primary_button"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <Link
            to="/builder"
            search={{ template: undefined }}
            onClick={() => setOpen(false)}
          >
            <Button className="w-full bg-primary text-white">
              Get Started Free
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
