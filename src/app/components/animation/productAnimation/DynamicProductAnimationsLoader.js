// components/DynamicProductAnimationsLoader.js
"use client";

import dynamic from "next/dynamic";

const ProductAnimations = dynamic(() => import("./ProductAnimations"), {
  ssr: false,
});

export default function DynamicProductAnimationsLoader() {
  return <ProductAnimations />;
}
