const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Connect", href: "#connect" },
  { label: "Sign up", href: "#signup" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-2 sm:px-6 lg:px-8">
      <div className="surface-panel mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl px-5 py-4 sm:flex-row items-center justify-between sm:px-6">
        <p className="text-sm text-[rgba(55,65,81,0.74)]">Shepherd &copy; {year} - All rights reserved.</p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-2 sm:justify-end">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[--color-text] transition-colors hover:bg-[--color-secondary]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}