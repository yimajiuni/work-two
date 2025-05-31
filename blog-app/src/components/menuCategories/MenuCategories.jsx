import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "./menucategories.module.css"


const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=trend"  className={`${styles.categoryItem} ${styles.trend}`}>
          Trend
        </Link>
        <Link href="/blog?cat=tech" className={`${styles.categoryItem} ${styles.tech}`}>
          Tech
        </Link>
        <Link href="blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/blog?cat=create" className={`${styles.categoryItem} ${styles.create}`}>
          Create
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
      </div>
  )
}

export default MenuCategories