"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CursorState = {
  x: number;
  y: number;
};

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      'a, button, [role="button"], input, textarea, select, summary, label'
    )
  );
}

export function CursorFX() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const latest = useRef<CursorState>({ x: 0, y: 0 });
  const ring = useRef<CursorState>({ x: 0, y: 0 });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (coarsePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const step = () => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;
      if (!dot || !ringEl) return;

      const { x, y } = latest.current;

      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const dx = x - ring.current.x;
      const dy = y - ring.current.y;
      ring.current.x += dx * 0.14;
      ring.current.y += dy * 0.14;

      ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      latest.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      setPressed(true);
      window.setTimeout(() => setPressed(false), 140);
    };

    const onOver = (e: PointerEvent) => setInteractive(isInteractiveTarget(e.target));
    const onOut = (e: PointerEvent) => {
      if (!(e.relatedTarget instanceof Element)) {
        setInteractive(false);
        return;
      }
      if (!isInteractiveTarget(e.relatedTarget)) setInteractive(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("blur", onLeave);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={[
          "sgp-cursor-ring",
          visible ? "sgp-cursor-visible" : "",
          interactive ? "sgp-cursor-interactive" : "",
          pressed ? "sgp-cursor-pressed" : ""
        ].join(" ")}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={[
          "sgp-cursor-dot",
          visible ? "sgp-cursor-visible" : "",
          interactive ? "sgp-cursor-interactive" : "",
          pressed ? "sgp-cursor-pressed" : ""
        ].join(" ")}
      />
    </>
  );
}

