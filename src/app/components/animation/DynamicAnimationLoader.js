// components/DynamicAnimationLoader.js
"use client";

import dynamic from "next/dynamic";

const DynamicScrollAnimation = dynamic(() => import("./ScrollAnimation"), {
  ssr: false,
});

export default function DynamicAnimationLoader() {
  return <DynamicScrollAnimation />;
}
