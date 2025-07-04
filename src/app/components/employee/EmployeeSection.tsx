import React from "react";
import Image from "next/image";
import { Employee } from "@/app/types";
import styles from "./page.module.scss";

interface EmployeeSectionProps {
  id: string;
  employees: Employee[];
}

const EmployeeSection: React.FC<EmployeeSectionProps> = ({ id, employees }) => {
  return (
    <section id={id} className={styles.employee}>
      <h2>Notre équipe</h2>
      <div className={styles.employeeList}>
        {employees.map((employee) => (
          <div key={employee.id} className={styles.employeeItem}>
            <Image
              src={employee.pictureurl}
              alt={employee.name}
              width={100}
              height={100}
            />
            <h3>{employee.name}</h3>
            <p>{employee.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeSection;
