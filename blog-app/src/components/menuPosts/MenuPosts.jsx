import React from 'react'
import styles from './menu-posts.module.css'
import Link from "next/link"
import Image from "next/image"

const menuPosts = (withImage) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet,</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jean Doe</span>
            <span className={styles.date}> - 02.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet,</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jean Doe</span>
            <span className={styles.date}> - 02.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>
            Food
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet,</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jean Doe</span>
            <span className={styles.date}> - 02.02.2024</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default menuPosts