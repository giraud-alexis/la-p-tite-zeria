import Image from "next/image";
import { Prestation } from "@/app/types";
import styles from "./page.module.scss";

interface PrestationSectionProps {
  id: string;
  prestations: Prestation[];
}

const PrestationSection: React.FC<PrestationSectionProps> = ({
  id,
  prestations,
}) => {
  return (
    <section id={id} className={styles.prestation}>
      <h2>Nos Prestations</h2>
      <div className={styles.prestationList}>
        {prestations.map((prestation) => (
          <div key={prestation.id} className={styles.prestationItem}>
            <Image
              src={prestation.imgurl}
              alt={prestation.name}
              width={500}
              height={200}
            />
            <h3>{prestation.name}</h3>
            <p>{prestation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrestationSection;
