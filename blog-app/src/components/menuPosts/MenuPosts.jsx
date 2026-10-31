import React from "react";
import styles from "./menu-posts.module.css";
import Link from "next/link";
import Image from "next/image";
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

const MenuPosts = async ({ withImage = false }) => {
  const { posts } = await getData();
  const items = (posts || []).slice(0, 4);

  if (items.length === 0) {
    return <p className={styles.empty}>No posts yet.</p>;
  }

  return (
    <div className={styles.items}>
      {items.map((item) => {
        const showVideo = isVideoSrc(item.img);
        const dateLabel = item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "";
        const catClass = styles[item.catSlug] || "";

        return (
          <Link
            href={`/posts/${item.slug}`}
            className={styles.item}
            key={item.id || item.slug}
          >
            {withImage && item.img ? (
              <div className={styles.imageContainer}>
                {showVideo ? (
                  <video
                    className={styles.video}
                    src={item.img}
                    muted
                    playsInline
                    poster="/island.jpg"
                  />
                ) : (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={styles.image}
                  />
                )}
              </div>
            ) : null}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${catClass}`}>
                {item.catSlug}
              </span>
              <h3 className={styles.postTitle}>{item.title}</h3>
              <div className={styles.detail}>
                <span className={styles.date}>{dateLabel}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuPosts;
