"use client";
import React from "react";
import Image from "next/image";
import { Promo } from "@/app/types";
import styles from "./page.module.scss";

interface PromoSectionProps {
  id: string;
  promos: Promo[];
}

const PromoSection: React.FC<PromoSectionProps> = ({ id, promos }) => {
  return (
    <section id={id} className={styles.promo}>
      <h2>Nos promotions en cours</h2>
      <div className={styles.promoList}>
        {promos.map((promo) => (
          <div key={promo.id} className={styles.promoItem}>
            <Image src={promo.img} alt={promo.name} width={100} height={100} />
            <h3>{promo.name}</h3>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
