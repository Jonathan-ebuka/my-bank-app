"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const HEADER_HEIGHT = 48;
const HIDDEN_CLIP = "inset(100% 0% 0% 0%)";
const SHOWN_CLIP = "inset(0% 0% 0% 0%)";

let lenis: Lenis | null = null;

/**
 * Site-wide motion: inertial scrolling plus scroll-driven animation for any
 * element carrying one of the data attributes below.
 *
 *   data-reveal            fade and rise in when scrolled into view
 *   data-reveal-group      same, staggering its [data-reveal-item] children
 *   data-clip              wipe open from the bottom edge
 *   data-parallax="80"     drift by ±80px while crossing the viewport
 *   data-words             brighten [data-word] children as you scroll past
 *   data-hero              the pinned home-page hero sequence
 */
export function Motion() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({ lerp: 0.085, anchors: true });
    lenis = instance;
    const tick = (time: number) => instance.raf(time * 1000);
    instance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      lenis?.scrollTo(0, { immediate: true, force: true });
    }

    const media = gsap.matchMedia();
    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const motion = Boolean(context.conditions?.motion);
        if (motion) animateContent();
        animateHero(motion);
      },
    );

    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => media.revert();
  }, [pathname]);

  return null;
}

function animateContent() {
  const rise = { duration: 1.1, ease: "power3.out" };

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        ...rise,
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    gsap.fromTo(
      group.querySelectorAll("[data-reveal-item]"),
      { opacity: 0, y: 56 },
      {
        opacity: 1,
        y: 0,
        ...rise,
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((element) => {
    gsap.fromTo(
      element,
      { clipPath: HIDDEN_CLIP },
      {
        clipPath: SHOWN_CLIP,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: "top 85%",
          once: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
    const distance = Number(element.dataset.parallax) || 60;
    gsap.fromTo(
      element,
      { y: distance },
      {
        y: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-words]").forEach((block) => {
    gsap.fromTo(
      block.querySelectorAll("[data-word]"),
      { opacity: 0.15 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "bottom 45%",
          scrub: true,
        },
      },
    );
  });
}

function animateHero(motion: boolean) {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;
  const find = gsap.utils.selector(hero);
  // With reduced motion the sequence still cross-fades, but nothing travels.
  const travel = motion ? 1 : 0;

  if (motion) {
    gsap.fromTo(
      find("[data-hero-word] span"),
      { yPercent: 110, y: 0 },
      { yPercent: 0, duration: 1.3, ease: "power3.out", stagger: 0.06, delay: 0.15 },
    );
    gsap.fromTo(
      find("[data-hero-intro-inner]"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.9 },
    );
  }

  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: hero,
        start: `top ${HEADER_HEIGHT}px`,
        end: "bottom bottom",
        scrub: true,
      },
    })
    .fromTo(
      find("[data-hero-bg]"),
      { yPercent: 0, scale: 1 + 0.12 * travel },
      { yPercent: -9 * travel, scale: 1, duration: 1 },
      0,
    )
    .to(
      find("[data-hero-word]"),
      {
        yPercent: -45 * travel,
        scale: 1 - 0.1 * travel,
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
      },
      0,
    )
    .fromTo(
      find("[data-hero-scrim]"),
      { opacity: 0 },
      { opacity: 0.6, duration: 0.2 },
      0.1,
    )
    .to(find("[data-hero-intro]"), { y: -60 * travel, opacity: 0, duration: 0.14 }, 0.02)
    .fromTo(
      find("[data-hero-statement]"),
      { opacity: 0, y: 90 * travel },
      { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
      0.18,
    )
    .to(
      find("[data-hero-statement]"),
      { opacity: 0, y: -90 * travel, duration: 0.14, ease: "power2.in" },
      0.46,
    )
    .fromTo(
      find("[data-hero-tile]"),
      { clipPath: HIDDEN_CLIP, y: 70 * travel },
      { clipPath: SHOWN_CLIP, y: 0, duration: 0.2, ease: "power2.out" },
      0.56,
    )
    .fromTo(
      find("[data-hero-caption]"),
      { opacity: 0, yPercent: 60 * travel },
      { opacity: 1, yPercent: 0, duration: 0.18, ease: "power2.out" },
      0.7,
    )
    .to({}, { duration: 0.1 });
}
