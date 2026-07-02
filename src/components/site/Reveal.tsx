import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: boolean;
  y?: number;
  once?: boolean;
  id?: string;
  style?: CSSProperties;
};

/**
 * Scroll reveal wrapper. Fades + slides content upward when it enters the viewport.
 * Set `stagger` to cascade direct children (via CSS custom property).
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = false,
  y = 32,
  once = true,
  id,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const mergedStyle: CSSProperties = {
    ...style,
    ["--reveal-y" as string]: `${y}px`,
    ["--reveal-delay" as string]: `${delay}ms`,
  };

  return (
    <Tag
      ref={ref as never}
      id={id}
      style={mergedStyle}
      className={`reveal-on-scroll ${stagger ? "reveal-stagger" : ""} ${visible ? "in-view" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}