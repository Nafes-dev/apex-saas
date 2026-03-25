import { useHls } from "../../hooks/useHls";

export function NumbersSection() {
  const videoRef = useHls(
    "https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
  );

  return (
    <section className="relative py-32 px-4 overflow-hidden">
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
            "linear-gradient(to top, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Metric */}
        <div className="text-center mb-24">
          <div className="text-7xl sm:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter text-hero-heading leading-none">
            $4.7B
          </div>
          <div className="text-xl text-foreground/60 mt-4">
            Revenue influenced
          </div>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Across thousands of teams worldwide, APEX has helped influence
            billions in closed revenue.
          </p>
        </div>

        {/* Bottom Metrics */}
        <div className="liquid-glass rounded-3xl p-12 grid md:grid-cols-2">
          <div className="text-center md:border-r border-border/50 md:pr-12">
            <div className="text-5xl font-semibold text-hero-heading">18M</div>
            <div className="text-muted-foreground mt-2">
              Leads processed monthly
            </div>
          </div>
          <div className="text-center md:pl-12 mt-8 md:mt-0">
            <div className="text-5xl font-semibold text-hero-heading">
              99.97%
            </div>
            <div className="text-muted-foreground mt-2">Platform uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
