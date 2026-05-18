import { Button } from "../Shared/Button";

const systemBlocks = ["Load Balancer", "Database", "Cache"];

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-24 md:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-[#2563eb] bg-[#2563eb]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#bfdbfe]">
          New challenges added
        </span>
        <h1 className="mt-6 text-5xl leading-tight font-black tracking-[-0.05em] text-[#e4e0f0] md:text-7xl">
          Master System Design
          <span className="block bg-gradient-to-r from-[#93c5fd] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
            by Building It
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#c7c4da]">
          Stop memorizing diagrams. Start solving real scalability problems on an
          interactive canvas. Design, break, and fix distributed systems.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="w-full px-7 py-3 text-base sm:w-auto">Start Learning Free</Button>
          <Button variant="secondary" className="w-full px-7 py-3 text-base sm:w-auto">
            Watch Demo
          </Button>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden rounded-2xl border border-[#2b3f78] bg-[#1e1933]/95 p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(56,189,248,0.25),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.2),transparent_35%)]" />
        <div className="grid gap-4 md:grid-cols-[180px_1fr]">
          <div className="relative rounded-xl border border-[#2b3f78] bg-[#13121d]/90 p-3">
            {systemBlocks.map((block) => (
              <div
                key={block}
                className="mb-2 rounded-md bg-[#1b1a25] px-3 py-2 text-xs text-[#c7c4da] ring-1 ring-[#2b3f78] last:mb-0"
              >
                {block}
              </div>
            ))}
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-[#2b3f78] bg-[#13121d]/65">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(19,18,29,0.85)_0%,rgba(30,64,175,0.3)_55%,rgba(14,165,233,0.26)_100%)]" />
            <div className="absolute inset-6 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.32),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(96,165,250,0.22),transparent_38%),radial-gradient(circle_at_48%_74%,rgba(34,211,238,0.2),transparent_46%)]" />
            <div className="absolute right-6 bottom-8 rounded-full border border-[#2563eb] bg-[#172554]/80 px-4 py-2 text-xs tracking-[0.12em] text-[#bfdbfe]">
              Latency: 45ms (Optimized)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
