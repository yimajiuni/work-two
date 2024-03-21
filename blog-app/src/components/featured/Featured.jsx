import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

/*const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};*/

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Discover my stories, creative ideas!</b>
        <br />
        and Share your life.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )

  /*return (
  <div className={styles.container}>
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
      {posts?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
  </div>
);*/
}

export default Featured
