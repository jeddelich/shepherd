import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Premium Plans", href: "#pricing" },
  { label: "Connect With Us", href: "#connect" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="surface-panel mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-lg font-semibold tracking-[-0.03em] text-(--color-text)"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-sm font-semibold text-white shadow-[0_10px_24px_rgba(79,124,130,0.28)]">
            S
          </span>
          <span>Shepherd</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-(--color-text) transition-colors hover:bg-(--color-secondary)"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Create Free Account
          </a>
        </nav>
      </div>
    </header>
  );
}