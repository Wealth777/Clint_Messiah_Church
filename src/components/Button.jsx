import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

/**
 * Reusable button. Renders:
 *   • a React Router <Link>  when `to` is passed
 *   • an <a>                 when `href` is passed
 *   • a <button>             otherwise
 *
 * Variants: gold (primary), outline (on dark), navy, outlineNavy, ghost
 */
const variants = {
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-600/20",
  outline:
    "border border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm",
  navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20",
  outlineNavy:
    "border border-navy-200 text-navy-900 hover:border-navy-700 hover:bg-navy-50",
  ghost: "text-navy-900 hover:text-gold-700",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  sm: "px-5 py-2.5 text-xs",
};

export default function Button({
  children,
  variant = "gold",
  size = "md",
  to,
  href,
  external = false,
  className = "",
  icon: Icon,
  ...rest
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}
