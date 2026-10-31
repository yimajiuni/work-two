import React from "react";
import Link from "next/link";
import styles from "./menu-categories.module.css";

const categories = [
  { slug: "trend", label: "Trend" },
  { slug: "tech", label: "Tech" },
  { slug: "food", label: "Food" },
  { slug: "create", label: "Create" },
  { slug: "travel", label: "Travel" },
  { slug: "culture", label: "Culture" },
];

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map((item) => (
        <Link
          key={item.slug}
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
