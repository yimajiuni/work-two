import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { getBaseUrl } from "@/utils/getBaseUrl";

// Modify getData to accept category parameter
const getData = async (category) => {
  const baseUrl = getBaseUrl();
  // If we're on the home page (no category), fetch latest post overall
  const url = category
    ? `${baseUrl}/api/posts?page=1&limit=1&cat=${category}`
    : `${baseUrl}/api/posts?page=1&limit=1&sort=desc`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async ({ category = undefined }) => {
  const { posts } = await getData(category); // Destructure to get posts array
  const featuredPost = posts?.[0]; // Get the first post as featured

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>
          {category
            ? `Latest in ${category.charAt(0).toUpperCase() + category.slice(1)}`
            : "Discover my stories, creative ideas!"}
        </b>
        <br />
        {!category && "and Share your life."}
      </h1>

      {featuredPost ? (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image
              src={featuredPost.img || '/p1.jpeg'}
              alt={featuredPost.title}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.postInfo}>
              <span className={styles.category}>{featuredPost.catSlug}</span>
              <span className={styles.date}>
                {new Date(featuredPost.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className={styles.postTitle}>{featuredPost.title}</h1>
            <p className={styles.postDesc}>
              {featuredPost.desc && (
                <div dangerouslySetInnerHTML={{
                  __html: featuredPost.desc.substring(0, 300) + "..."
                }} />
              )}
            </p>
            <Link href={`/posts/${featuredPost.slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.post}>
          <p>No posts available in this category yet.</p>
        </div>
      )}
    </div>
  )
}

export default Featured