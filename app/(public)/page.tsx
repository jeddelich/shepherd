export default function Home() {
  return (
    <main className="hero-grid flex flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
      <div className="surface-panel relative w-full max-w-6xl overflow-hidden rounded-4xl">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(135deg,rgba(79,124,130,0.22),rgba(201,123,99,0.18),transparent)]" />

        <div className="relative grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
          <section id="about" className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(79,124,130,0.18)] bg-[rgba(79,124,130,0.08)] px-4 py-2 text-sm font-medium tracking-[0.18em] text-(--color-primary) uppercase">
                Care coordination, made calm
              </div>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-(--color-text) sm:text-5xl lg:text-6xl">
                  A landing screen built directly from your care palette.
                </h1>
                <p className="max-w-xl text-base leading-7 text-[rgba(55,65,81,0.78)] sm:text-lg">
                  Dusty teal anchors the product, terracotta calls attention to the next action,
                  and the warm ivory background keeps the interface soft enough for healthcare
                  workflows.
                </p>
              </div>
            </div>

            <div id="signup" className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#palette"
                className="inline-flex items-center justify-center rounded-full bg-(--color-primary) px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore palette
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-full border border-(--color-border) bg-white/70 px-6 py-3 text-sm font-semibold text-(--color-text) transition-colors duration-200 hover:bg-(--color-secondary)"
              >
                See UI context
              </a>
            </div>

            <div id="pricing" className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-(--color-border) bg-white/70 p-4">
                <p className="text-sm text-[rgba(55,65,81,0.68)]">Primary use</p>
                <p className="mt-2 text-xl font-semibold text-(--color-primary)">Navigation + trust</p>
              </div>
              <div className="rounded-3xl border border-(--color-border) bg-white/70 p-4">
                <p className="text-sm text-[rgba(55,65,81,0.68)]">Accent use</p>
                <p className="mt-2 text-xl font-semibold text-(--color-accent)">Calls to action</p>
              </div>
              <div className="rounded-3xl border border-(--color-border) bg-white/70 p-4">
                <p className="text-sm text-[rgba(55,65,81,0.68)]">Success use</p>
                <p className="mt-2 text-xl font-semibold text-(--color-success)">Follow-up states</p>
              </div>
            </div>
          </section>

          <section id="connect" className="grid gap-5">
            <div className="rounded-[1.75rem] border border-(--color-border) bg-(--color-secondary) p-5">
              <div className="flex items-start justify-between gap-4 rounded-3xl bg-white px-5 py-4 shadow-[0_14px_32px_rgba(55,65,81,0.08)]">
                <div>
                  <p className="text-sm font-medium text-[rgba(55,65,81,0.6)]">Today&apos;s overview</p>
                  <p className="mt-2 text-2xl font-semibold text-(--color-text)">12 care notes pending review</p>
                </div>
                <div className="rounded-full bg-[rgba(106,138,100,0.14)] px-3 py-1 text-sm font-semibold text-(--color-success)">
                  On track
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-(--color-primary) p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/75">Care plan</p>
                  <p className="mt-6 text-3xl font-semibold">84%</p>
                  <p className="mt-2 max-w-56 text-sm leading-6 text-white/80">
                    Families completed the onboarding checklist this week.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[rgba(55,65,81,0.55)]">Next step</p>
                  <p className="mt-6 text-xl font-semibold text-(--color-text)">
                    Schedule follow-up outreach
                  </p>
                  <button className="mt-5 rounded-full bg-(--color-accent) px-4 py-2 text-sm font-semibold text-white">
                    Review tasks
                  </button>
                </div>
              </div>
            </div>

            <div id="palette" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                ["Primary", "#4F7C82", "bg-(--color-primary) text-white"],
                ["Secondary", "#F6F1EB", "bg-(--color-secondary) text-(--color-text)"],
                ["Accent", "#C97B63", "bg-(--color-accent) text-white"],
                ["Text", "#374151", "bg-(--color-text) text-white"],
                ["Success", "#6A8A64", "bg-(--color-success) text-white"],
                ["Background", "#FFFCF8", "bg-(--color-background) text-(--color-text)"],
              ].map(([name, hex, classes]) => (
                <div
                  key={name}
                  className={`palette-swatch min-h-36 rounded-3xl border border-black/5 p-5 ${classes}`}
                >
                  <p className="text-sm uppercase tracking-[0.18em] opacity-80">{name}</p>
                  <p className="mt-10 text-2xl font-semibold">{hex}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}