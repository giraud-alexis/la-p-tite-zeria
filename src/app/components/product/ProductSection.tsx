import React from "react";
import Image from "next/image";
import { Product } from "@/app/types";
import styles from "./page.module.scss";

interface ProductSectionProps {
  id: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ id, products }) => {
  return (
    <section id={id} className={styles.product}>
      <h2>Nos Produits</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <Image
              src={product.imgurl}
              alt={product.name}
              width={100}
              height={100}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
