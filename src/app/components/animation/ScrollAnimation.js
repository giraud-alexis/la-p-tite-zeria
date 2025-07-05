"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistre le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useEffect(() => {
    // Initialise les positions et rotations des éléments
    gsap.set(".logoPelleOne", { x: 570, rotation: 165 });
    gsap.set(".logoPelleTwo", { x: -560, rotation: 165 });

    // Animation pour .logoPelleOne
    gsap.to(".logoPelleOne", {
      x: -window.innerWidth,
      rotation: 2360,
      scrollTrigger: {
        trigger: ".introLogo",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation pour .logoPelleTwo
    gsap.to(".logoPelleTwo", {
      x: window.innerWidth,
      rotation: -2360,
      scrollTrigger: {
        trigger: ".introLogo",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Nettoyage des animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
