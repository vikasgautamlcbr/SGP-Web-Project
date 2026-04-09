import { Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  email?: string;
};

type TeamCardsProps = {
  members: TeamMember[];
};

export function TeamCards({ members }: TeamCardsProps) {
  return (
    <section>
      <div className="container py-16">
        <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Team</h2>
        <p className="text-sm text-slate-200 md:text-base">
          Operators, investors, and builders working together.
        </p>
        </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-300">{member.role}</p>
              </div>
              <div className="sgpf-icon-tile sgpf-icon-tile-sm text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            </div>

            {member.bio ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {member.bio}
              </p>
            ) : null}

            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
              >
                <span className="sgpf-icon-tile sgpf-icon-tile-sm">
                  <Mail className="h-4 w-4" />
                </span>
                {member.email}
              </a>
            ) : null}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
