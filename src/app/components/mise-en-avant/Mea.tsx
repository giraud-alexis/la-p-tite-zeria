import React from "react";
import Image from "next/image";
import { Mea } from "@/app/types";
import styles from "./page.module.scss";

interface MeaSectionProps {
  id: string;
  miseEnAvants: Mea[];
}

const MeaSection: React.FC<MeaSectionProps> = ({ id, miseEnAvants }) => {
  return (
    <section id={id} className={styles.miseEnAvants}>
      <h2>Mise en avant</h2>
      <div className={styles.meaList}>
        {miseEnAvants.map((mea) => (
          <div key={mea.id} className={styles.meaItem}>
            <Image src={mea.img} alt={mea.name} width={100} height={100} />
            <h3>{mea.name}</h3>
            <p>{mea.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeaSection;
