import React from "react";
import Image from "next/image";
import { Employee } from "@/app/types";
import pizzeria from "@/app/assets/img/pizzeria.webp";
import styles from "./page.module.scss";

interface EmployeeSectionProps {
  id: string;
  employees: Employee[];
}

const EmployeeSection: React.FC<EmployeeSectionProps> = ({ id, employees }) => {
  return (
    <section id={id} className={styles.employee}>
      <h2>Qui somme nous?</h2>
      <div className={styles.introEmployee}>
        <Image src={pizzeria} alt="pizzeria" width={1000} height={400} />
      </div>
      <div className={styles.employeeList}>
        {employees.map((employee) => (
          <div key={employee.id} className={styles.employeeItem}>
            <Image
              src={employee.pictureurl}
              alt={employee.name}
              width={400}
              height={500}
            />
            <div className={styles.employeeInfo}>
              <h3>{employee.name}</h3>
              <p>{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeSection;
