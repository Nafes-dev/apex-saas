import { ChevronRight, Zap, BarChart3, Shield } from "lucide-react";
import { useHls } from "../../hooks/useHls";

const features = [
  {
    icon: Zap,
    title: "Lightning Workflows",
    description:
      "Automate repetitive tasks with intelligent pipelines that adapt to your team's rhythm and velocity.",
    statValue: "3.2x faster",
    statLabel: "pipeline throughput",
  },
  {
    icon: BarChart3,
    title: "Deep-Dive Analytics",
    description:
      "Uncover patterns hiding in your funnel. Real-time cohort analysis with zero configuration required.",
    statValue: "148%",
    statLabel: "avg. conversion lift",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description:
      "SOC 2, GDPR, and HIPAA guardrails baked into every interaction. Audit trails generated automatically.",
    statValue: "Zero",
    statLabel: "compliance incidents",
  },
];

export function FeaturesSection() {
  const videoRef = useHls(
    "https://stream.mux.com/Jwr2RhmsNrd6GEspBNgm02vJsRZAGlaoQIh4AucGdASw.m3u8"
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

      {/* Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm mb-6">
            <span className="text-foreground/80">Core Platform</span>
            <span className="bg-white/10 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
              Overview <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold">
            Built for Teams That
            <br />
            Ship Relentlessly
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Three pillars that keep your revenue engine humming without the
            operational drag.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="liquid-glass rounded-3xl p-8 hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-hero-heading text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="border-t border-border/50 mt-6 pt-6">
                <div className="text-2xl font-semibold text-hero-heading">
                  {feature.statValue}
                </div>
                <div className="text-sm text-muted-foreground">
                  {feature.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
