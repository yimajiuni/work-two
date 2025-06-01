import React from "react";
import styles from './single-page.module.css';
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import { getBaseUrl } from "@/utils/getBaseUrl";

const getData = async (slug) => {
  const baseUrl = getBaseUrl();
  const res = await fetch(
    `${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}


const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.postInfo}>
            <div className={styles.detail}>
              <span className={styles.date}>{data.createdAt}</span>
              <span className={styles.category}>{data.catSlug}</span>
            </div>
          </div>
        </div>
        {data.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt={data.title}
              fill
              className={styles.image}
              priority
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc || "" }} />

          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;