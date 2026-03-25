import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useHls } from "../../hooks/useHls";

export function ChessSection() {
  const videoRef = useHls(
    "https://stream.mux.com/1CCfG6mPC7LbMOAs6iBOfPeNd3WaKlZuHuKHp00G62j8.m3u8"
  );

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left - Video */}
        <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <div className="liquid-glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm mb-6">
            <span className="text-foreground/80">Smart Routing</span>
            <span className="bg-white/10 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
              New <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight">
            Every Lead Finds
            <br />
            Its Perfect Path
          </h2>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            Intelligent lead scoring meets adaptive routing. Each prospect is
            matched to the rep, sequence, and cadence most likely to convert — in
            real time.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "AI-scored lead qualification",
              "Dynamic rep assignment",
              "Multi-touch attribution",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-8">
            <Button variant="hero">See It in Action</Button>
            <Button variant="heroSecondary">Read the Docs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
