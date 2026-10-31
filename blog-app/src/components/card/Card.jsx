import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import Deletion from "@/components/deletion/Deletion";
import { isVideoSrc } from "@/utils/media";

const Card = ({ item }) => {
  if (!item || !item.title) return null;

  const formattedDate = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString()
    : "";
  const mediaSrc = item.img;
  const showVideo = isVideoSrc(mediaSrc);

  return (
    <div className={styles.container}>
      {mediaSrc ? (
        <div className={styles.imageContainer}>
          {showVideo ? (
            <video
              className={styles.video}
              src={mediaSrc}
              muted
              loop
              playsInline
              autoPlay
              poster="/island.jpg"
            />
          ) : (
            <Image
              src={mediaSrc}
              alt={item.title}
              fill
              className={styles.image}
            />
          )}
        </div>
      ) : null}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: item.desc ? item.desc.substring(0, 60) + "..." : "",
          }}
        />
        <div className={styles.func}>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
          <Deletion />
        </div>
      </div>
    </div>
  );
};

export default Card;
