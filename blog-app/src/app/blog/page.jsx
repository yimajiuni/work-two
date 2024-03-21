import React from 'react'
import styles from './blogPage.module.css'
import Menu from "@/components/menu/Menu"
import CardList from "@/components/cardlist/CardList"

/*またの名を,カテゴリーバー*/
const BlogPage = ({searchParams}) => {

  const page = parseInt (searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
            </div>
        </div>
    </div>
  )
}

export default BlogPage