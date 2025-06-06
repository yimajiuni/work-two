import React from 'react'
import styles from './category-list.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { getBaseUrl } from "@/utils/getBaseUrl";

/*fetch actual data*/
const getData = async () => {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/categories`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array as fallback
  }

}


const CategoryList = async () => {
  const data = await getData()

  // Add safety check
  if (!data || data.length === 0) {
    return <div>No categories found</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=''
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
