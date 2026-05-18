import logo from "../../assets/ArchTrainer-Logo.webp";

const footerLinks = ["Terms", "Privacy", "Community"];

export function Footer() {
  return (
    <footer className="border-t border-[#292348] bg-[#1e1933]/65">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="ArchTrainer logo" className="h-7 w-7 rounded-sm" />
          <span className="text-lg font-bold tracking-tight text-[#e4e0f0]">ArchTrainer</span>
        </a>

        <nav className="flex items-center gap-6 text-sm text-[#918ea3]">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-[#c4c0ff]">
              {link}
            </a>
          ))}
        </nav>

        <p className="text-xs text-[#918ea3]">&copy; 2026 ArchTrainer Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
