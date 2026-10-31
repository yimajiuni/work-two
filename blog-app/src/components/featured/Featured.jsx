import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { isVideoSrc } from "@/utils/media";

const getData = async (category) => {
  const baseUrl = getBaseUrl();
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
  const { posts } = await getData(category);
  const featuredPost = posts?.[0];
  const mediaSrc = featuredPost?.img || "/pottery.jpg";
  const showVideo = isVideoSrc(mediaSrc);

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
            {showVideo ? (
              <video
                className={styles.video}
                src={mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                poster="/island.jpg"
              />
            ) : (
              <Image
                src={mediaSrc}
                alt={featuredPost.title}
                fill
                className={styles.image}
              />
            )}
          </div>
          <div className={styles.textContainer}>
            <div className={styles.postInfo}>
              <span className={styles.category}>{featuredPost.catSlug}</span>
              <span className={styles.date}>
                {new Date(featuredPost.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className={styles.postTitle}>{featuredPost.title}</h1>
            <div className={styles.postDesc}>
              {featuredPost.desc && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.desc.substring(0, 300) + "...",
                  }}
                />
              )}
            </div>
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
  );
};

export default Featured;
