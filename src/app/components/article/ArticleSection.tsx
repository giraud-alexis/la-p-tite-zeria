import React from "react";
import Image from "next/image";
import { Article } from "@/app/types";
import styles from "./page.module.scss";

interface ArticleSectionProps {
  id: string;
  articles: Article[];
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ id, articles }) => {
  return (
    <section id={id} className={styles.article}>
      <h2>Nos artiles</h2>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleItem}>
            <Image
              src={article.img}
              alt={article.title}
              width={100}
              height={100}
            />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
