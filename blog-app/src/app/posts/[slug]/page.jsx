import React from "react";
import styles from "./single-page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { isVideoSrc } from "@/utils/media";

const getData = async (slug) => {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const showVideo = isVideoSrc(data.img);

  return (
    <div className={styles.container}>
      <div className={styles.articleColumn}>
        {data.img ? (
          <div className={styles.imageContainer}>
            {showVideo ? (
              <video
                className={styles.video}
                src={data.img}
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="/island.jpg"
              />
            ) : (
              <Image
                src={data.img}
                alt={data.title}
                fill
                className={styles.image}
                priority
              />
            )}
          </div>
        ) : null}

        <header className={styles.infoContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.postInfo}>
            <div className={styles.detail}>
              <span className={styles.date}>{data.createdAt}</span>
              <span className={styles.category}>{data.catSlug}</span>
            </div>
          </div>
        </header>

        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
        />

        <div className={styles.comment}>
          <Comments postSlug={slug} />
        </div>
      </div>

      <aside className={styles.sidebar}>
        <Menu />
      </aside>
    </div>
  );
};

export default SinglePage;
