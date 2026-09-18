import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

/**
 * Fades content up into view on scroll using IntersectionObserver.
 * Wrap any block: <Reveal delay={100}>...</Reveal>
 * (Styling lives in src/index.css under `.reveal`.)
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", visible && "is-visible", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
