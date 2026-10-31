import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./recommended.module.css";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { isVideoSrc } from "@/utils/media";

const getData = async () => {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/posts?page=1&cat=`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const RecommendedPool = async ({ excludeSlug }) => {
  const { posts } = await getData();
  const pool = (posts || [])
    .filter((item) => item?.slug && item.slug !== excludeSlug)
    .slice(0, 6);

  if (pool.length === 0) return null;

  return (
    <section className={styles.pool}>
      <h2 className={styles.title}>Recommended</h2>
      <p className={styles.subtitle}>Picks from the archive</p>
      <div className={styles.grid}>
        {pool.map((item) => {
          const showVideo = isVideoSrc(item.img);
          return (
            <Link
              href={`/posts/${item.slug}`}
              key={item.id || item._id || item.slug}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                {item.img ? (
                  showVideo ? (
                    <video
                      className={styles.video}
                      src={item.img}
                      muted
                      loop
                      playsInline
                      autoPlay
                      poster="/island.jpg"
                    />
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={styles.image}
                    />
                  )
                ) : (
                  <div className={styles.imageFallback} aria-hidden="true" />
                )}
              </div>
              <div className={styles.meta}>
                <div className={styles.detail}>
                  <span className={styles.date}>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : ""}
                  </span>
                  <span className={styles.category}>{item.catSlug}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedPool;
