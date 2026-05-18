import { Button } from "../Shared/Button";
import logo from "../../assets/ArchTrainer-Logo.webp";
import { navItems } from "./landingData";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#292348] bg-[#1e1933]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="ArchTrainer logo" className="h-10 w-10 rounded-sm" />
          <span className="text-lg font-bold tracking-tight text-[#e4e0f0]">
            ArchTrainer
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#c7c4da] md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-[#e3dfff]">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="px-5">
            Login
          </Button>
          <Button className="px-5">Start Learning</Button>
        </div>
      </div>
    </header>
  );
}
