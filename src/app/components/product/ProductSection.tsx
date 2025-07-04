import React from "react";
import Image from "next/image";
import { CaProduct } from "@/app/types";
import styles from "./page.module.scss";

interface ProductSectionProps {
  id: string;
  Caproducts: CaProduct[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ id, Caproducts }) => {
  return (
    <section id={id} className={styles.product}>
      <h2>Nos Produits</h2>
      <div className={styles.productList}>
        {Caproducts.map((caproduct) => (
          <div key={caproduct.id} className={styles.productItem}>
            <h3>{caproduct.name}</h3>
            <Image
              src={caproduct.imgurl}
              alt={caproduct.name}
              width={100}
              height={100}
            />
            <p>{caproduct.description}</p>
            <div className={styles.associatedProducts}>
              {(caproduct.Products || []).map((associatedProduct) => (
                <div key={associatedProduct.id}>
                  <Image
                    src={associatedProduct.imgurl}
                    alt={associatedProduct.name}
                    width={100}
                    height={100}
                  />
                  <span>{associatedProduct.name}</span>
                  <p>{associatedProduct.description}</p>
                  <span>{associatedProduct.price} €</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
