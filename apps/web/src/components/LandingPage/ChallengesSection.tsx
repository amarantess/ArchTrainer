import { challenges } from "./landingData";
import { ChallengeCard } from "./ChallengeCard";

export function ChallengesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[#e4e0f0]">
            Featured Challenges
          </h2>
          <p className="mt-3 text-[#c7c4da]">
            Put your skills to the test with these popular system design problems.
          </p>
        </div>
        <a href="#" className="text-sm font-bold text-[#c4c0ff] transition hover:text-[#e3dfff]">
          View all challenges
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} {...challenge} />
        ))}
      </div>
    </section>
  );
}
