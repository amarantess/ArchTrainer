type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-[#3713ec] via-[#2563eb] to-[#60a5fa] text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:brightness-110",
    secondary:
      "bg-[#1e1933] text-[#e4e0f0] ring-1 ring-[#292348] hover:bg-white/5",
    ghost: "bg-transparent text-slate-100 hover:bg-white/10",
    outline: "bg-transparent text-[#e4e0f0] ring-1 ring-[#464557] hover:bg-white/5",
  };

  return (
    <button
      {...rest}
      type={type}
      className={`rounded px-4 py-2 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4c0ff] ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
