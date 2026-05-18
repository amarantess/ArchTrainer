import { Button } from "../Shared/Button";
import type { ChallengeDifficulty, ChallengeVisual } from "./landingData";

type ChallengeCardProps = {
  title: string;
  difficulty: ChallengeDifficulty;
  description: string;
  time: string;
  visual: ChallengeVisual;
};

const difficultyClasses: Record<ChallengeDifficulty, string> = {
  Easy: "border-emerald-400/40 bg-emerald-400/20 text-emerald-200",
  Medium: "border-amber-400/40 bg-amber-400/20 text-amber-100",
  Hard: "border-rose-400/40 bg-rose-400/20 text-rose-100",
};

const visualClasses: Record<ChallengeVisual, string> = {
  warp: "bg-[radial-gradient(circle_at_85%_0%,rgba(192,132,252,0.35),transparent_40%),linear-gradient(120deg,#17132b_0%,#221b40_55%,#13121d_100%)]",
  atlas:
    "bg-[radial-gradient(circle_at_50%_-10%,rgba(196,192,255,0.35),transparent_35%),linear-gradient(135deg,#1a1530_0%,#2b1f50_45%,#13121d_100%)]",
  beam: "bg-[radial-gradient(circle_at_15%_0%,rgba(55,19,236,0.35),transparent_35%),linear-gradient(130deg,#18142c_0%,#271b48_55%,#13121d_100%)]",
};

export function ChallengeCard({
  title,
  difficulty,
  description,
  time,
  visual,
}: ChallengeCardProps) {
  return (
    <article className="rounded-xl border border-[#292348] bg-[#1e1933] p-4 transition duration-300 hover:border-[#464557] hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]">
      <div className={`relative h-40 overflow-hidden rounded-lg border border-[#292348] ${visualClasses[visual]}`}>
        <span
          className={`absolute top-3 left-3 rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${difficultyClasses[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
      <h3 className="mt-5 text-2xl/7 font-bold tracking-tight text-[#e4e0f0]">{title}</h3>
      <p className="mt-3 min-h-[76px] text-sm leading-relaxed text-[#c7c4da]">{description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-[#292348] pt-4 text-xs text-[#918ea3]">
        <span>{time}</span>
        <Button className="px-4 py-1.5 text-xs">Try Now</Button>
      </div>
    </article>
  );
}
