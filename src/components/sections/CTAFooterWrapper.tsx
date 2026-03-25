import { Button } from "../ui/button";
import { useHls } from "../../hooks/useHls";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Community", "Support", "Status"],
};

export function CTAFooterWrapper() {
  const videoRef = useHls(
    "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8"
  );

  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)",
        }}
      />

      {/* CTA Section */}
      <div className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="liquid-glass rounded-[2rem] p-12 sm:p-20 text-center">
            <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold">
              Ready to Outpace
              <br />
              Your Pipeline Targets?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Join 2,400+ teams already accelerating revenue with APEX. No
              credit card required.
            </p>
            <div className="flex gap-4 mt-8 justify-center">
              <Button variant="hero">Start Free Today</Button>
              <Button variant="heroSecondary">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">APEX</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The revenue acceleration platform trusted by thousands of
                high-growth teams worldwide.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-medium text-hero-heading mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
              &copy; 2026 APEX Inc.
            </span>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
