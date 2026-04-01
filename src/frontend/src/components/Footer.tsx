import { FileText } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;
  return (
    <footer
      className="bg-white border-t border-border py-12 no-print"
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <FileText className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-foreground">ResuMe Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Build professional resumes that land interviews &mdash; in
              minutes.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground mb-3">
              Product
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Templates
                </a>
              </li>
              <li>
                <a href="/builder" className="hover:text-foreground">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground mb-3">
              Templates
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Professional
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Creative
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Academic
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Tech Focused
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground mb-3">
              Support
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/templates" className="hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-foreground">
                  ATS Guide
                </a>
              </li>
              <li>
                <a href="/builder" className="hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {year}. Built with &#10084;&#65039; using{" "}
          <a
            href={utm}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
