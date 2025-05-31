import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import Deletion from "@/components/deletion/Deletion"

const Card = ({ item }) => {
  if (!item || !item.title) return null;

  const formattedDate = item.createdAt 
    ? new Date(item.createdAt).toLocaleDateString()
    : "";

  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt={item.title} fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {formattedDate}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div 
          className={styles.desc} 
          dangerouslySetInnerHTML={{ 
            __html: item.desc ? item.desc.substring(0, 60) + "..." : "" 
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