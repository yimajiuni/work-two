import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";

const getData = async (slug) => {
  const res = await fetch(
    //DO MAKE SURE THE ENDPOINT IS CORRECT
    `http://localhost:3000/api/posts/${slug}`,{
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
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;