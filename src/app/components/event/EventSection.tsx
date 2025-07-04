import React from "react";
import Image from "next/image";
import { Event } from "@/app/types";
import styles from "./page.module.scss";

interface EventSectionProps {
  id: string;
  Events: Event[];
}

const EventSection: React.FC<EventSectionProps> = ({ id, Events }) => {
  return (
    <section id={id} className={styles.event}>
      <h2>Nos évennements</h2>
      <div className={styles.meaList}>
        {Events.map((event) => (
          <div key={event.id} className={styles.meaItem}>
            <Image src={event.img} alt={event.name} width={100} height={100} />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{event.event_date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
