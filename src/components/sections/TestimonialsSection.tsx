const testimonials = [
  {
    quote:
      "APEX transformed how we think about pipeline velocity. Our reps close 40% faster and actually enjoy using the platform.",
    name: "Clara Whitfield",
    role: "VP Revenue, Meridian Health",
    initials: "CW",
  },
  {
    quote:
      "The analytics alone paid for itself in the first quarter. We finally have visibility into what's actually driving conversions.",
    name: "Derek Tanaka",
    role: "Growth Lead, Baseform",
    initials: "DT",
  },
  {
    quote:
      "Compliance used to be a bottleneck. With APEX's engine, we scaled into three new markets without a single audit finding.",
    name: "Simone Reuter",
    role: "CRO, Alpenhaus Group",
    initials: "SR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold">
            Trusted by Revenue
            <br />
            Leaders Everywhere
          </h2>
          <p className="text-muted-foreground mt-4">
            Hear from the teams that made the switch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`liquid-glass rounded-3xl p-8 ${
                i === 1 ? "md:-translate-y-6" : ""
              }`}
            >
              <p className="text-foreground/80 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-border/50 mt-6 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground/80">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-hero-heading">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
