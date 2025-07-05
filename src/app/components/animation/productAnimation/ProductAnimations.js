// components/animations/ProductAnimations.js
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function ProductAnimations() {
  useEffect(() => {
    // Crée une timeline GSAP
    let tl = gsap.timeline();

    // Définis l'opacité initiale à 0
    gsap.set(".productList", { opacity: 0 });
    gsap.set(".productItem", { opacity: 0 });
    gsap.set(".associatedProducts", { opacity: 0 });

    // Ajoute les animations à la timeline
    tl.to(".productList", {
      opacity: 1,
      duration: 1,
    });

    tl.to(".productItem", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1, // Décale le début de chaque animation pour un effet en cascade
    });

    tl.to(".associatedProducts", {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  return null; // Ce composant ne rend rien, il gère juste les animations
}
