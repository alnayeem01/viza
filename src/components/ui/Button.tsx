import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "whatsapp" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
  accent:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp/90 focus-visible:ring-whatsapp",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:ring-primary",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${
    disabled ? "pointer-events-none opacity-60" : ""
  }`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
