import React from 'react'
import styles from './blogPage.module.css'
import Menu from "@/components/menu/Menu"
import CardList from "@/components/cardlist/CardList"
import Featured from "@/components/featured/Featured"
import CategoryList from '@/components/categorylist/CategoryList'

/*またの名を,カテゴリーバー*/
const BlogPage = ({searchParams}) => {

  const page = parseInt (searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
        <Featured category={cat} />
        <CategoryList />
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