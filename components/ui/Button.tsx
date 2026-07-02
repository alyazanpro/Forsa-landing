import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-fursa-blue text-white shadow-soft hover:bg-fursa-navy hover:shadow-card active:scale-[0.98]",
  secondary:
    "bg-white text-fursa-navy border border-fursa-line hover:border-fursa-blue/40 hover:bg-fursa-mist active:scale-[0.98]",
  ghost: "text-fursa-navy hover:bg-fursa-mist active:scale-[0.98]",
  dark: "bg-white text-fursa-navy hover:bg-fursa-mist active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  children: ReactNode;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "start",
  children,
  className = "",
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "start" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "end" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
