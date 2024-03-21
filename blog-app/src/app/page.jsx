import styles from "../app/homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categorylist/CategoryList";
import CardList from "../components/cardlist/CardList";
import Menu from "../components/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}