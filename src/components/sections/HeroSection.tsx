import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const brands = [
  { name: "Vortex", letter: "V" },
  { name: "Nimbus", letter: "N" },
  { name: "Prysma", letter: "P" },
  { name: "Cirrus", letter: "C" },
  { name: "Kynder", letter: "K" },
  { name: "Halcyn", letter: "H" },
];

const allBrands = [...brands, ...brands];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(260 87% 3% / 0.1) 45%, hsl(260 87% 3% / 0.4) 60%, hsl(260 87% 3% / 0.75) 75%, hsl(260 87% 3%) 95%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-center pt-6 px-4">
          <div className="liquid-glass rounded-3xl px-6 py-3 flex items-center gap-6 max-w-[850px] w-full">
            {/* Logo */}
            <div className="flex items-center gap-2">
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

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1 ml-auto">
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                Features <ChevronDown className="w-3 h-3" />
              </button>
              <button className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                Solutions
              </button>
              <button className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                Plans
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                Learning <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* CTA */}
            <div className="ml-auto md:ml-0">
              <Button variant="hero" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          {/* Announcement Badge */}
          <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm mb-8">
            <span className="text-foreground/80">Nova+ Launched!</span>
            <span className="bg-white/10 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
              Explore <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl">
            Accelerate Your
            <br />
            Revenue Growth Now
          </h1>

          {/* Subheading */}
          <p className="text-hero-sub text-lg max-w-md mt-4 opacity-80">
            Drive your funnel forward with clever workflows, analytics, and
            seamless lead management.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <Button variant="hero">Start Free Right Now</Button>
            <Button variant="heroSecondary">Schedule a Consult</Button>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="flex items-center gap-8 px-8 pb-8">
          <div className="text-foreground/50 text-sm leading-tight min-w-fit">
            Relied on by brands
            <br />
            across the globe
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee w-max">
              {allBrands.map((brand, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-medium">
                    {brand.letter}
                  </div>
                  <span className="text-sm text-foreground/60">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
