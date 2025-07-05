// components/product/ProductSection.js
import React from "react";
import Image from "next/image";
import { CaProduct } from "@/app/types";
import styles from "./page.module.scss";
import DynamicProductAnimationsLoader from "../animation/productAnimation/DynamicProductAnimationsLoader";

interface ProductSectionProps {
  id: string;
  Caproducts: CaProduct[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ id, Caproducts }) => {
  return (
    <section id={id} className={styles.product}>
      <h3>Nos Pizzas</h3>
      <div className={`${styles.productList} productList`}>
        {Caproducts.map((caproduct) => (
          <div
            key={caproduct.id}
            className={`${styles.productItem} productItem`}
          >
            <div className={styles.caproduct}>
              <h4>{caproduct.name}</h4>
              <Image
                src={caproduct.imgurl}
                alt={caproduct.name}
                width={800}
                height={500}
              />
              <p>{caproduct.description}</p>
            </div>
            <div className={`${styles.associatedProducts} associatedProducts`}>
              {(caproduct.Products || []).map((associatedProduct) => (
                <div
                  className={styles.associatedProduct}
                  key={associatedProduct.id}
                >
                  <Image
                    src={associatedProduct.imgurl}
                    alt={associatedProduct.name}
                    width={100}
                    height={100}
                  />
                  <div className={styles.description}>
                    <span>{associatedProduct.name}</span>
                    <p>{associatedProduct.description}</p>
                  </div>
                  <span>{associatedProduct.price} €</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <DynamicProductAnimationsLoader />
    </section>
  );
};

export default ProductSection;
