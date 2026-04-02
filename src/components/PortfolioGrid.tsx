type PortfolioItem = {
  name: string;
  description: string;
  tags?: string[];
};

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <section>
      <div className="container py-16">
        <div className="flex items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Portfolio
          </h2>
          <p className="text-sm text-slate-200 md:text-base">
            A snapshot of focus areas and representative companies.
          </p>
          </div>
        </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/7 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-white">{item.name}</h3>
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70 opacity-60 transition group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {item.description}
            </p>
            {item.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
