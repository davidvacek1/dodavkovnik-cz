import type { ReactNode, HTMLAttributes } from "react";

/**
 * Motion wrappers — intentionally plain <div> passthroughs in production builds.
 *
 * History: we tried framer-motion `whileInView` + `viewport.amount: 0` for scroll-
 * triggered reveals but CDP full-page screenshots never fire the required scroll
 * events, leaving hidden sections invisible in PDF/OG snapshots and some SEO
 * previews. SSR also rendered the initial "hidden" state, hurting no-JS readers.
 * CSS-level fade-ins (see `globals.css .reveal`) give us a subtle reveal without
 * ever hiding content in the initial render.
 */

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay: _delay,
  y: _y,
  ...rest
}: Props) {
  void _delay;
  void _y;
  return (
    <div className={`reveal ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal-stagger ${className ?? ""}`}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className ?? ""}`}>{children}</div>;
}
