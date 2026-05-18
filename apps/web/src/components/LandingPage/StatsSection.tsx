import { stats } from "./landingData";

export function StatsSection() {
  return (
    <section className="border-y border-[#292348] bg-[#1b1a25]/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {stats.map((item) => (
          <article key={item.label} className="text-left md:border-l md:border-[#292348] md:pl-8 first:md:border-l-0 first:md:pl-0">
            <p className="text-4xl font-bold tracking-tight text-[#c4c0ff]">{item.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#918ea3]">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
