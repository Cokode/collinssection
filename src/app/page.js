import styles from "./page.module.css";
import MyHome from "./components/myHome";
import Footer from "./components/footer";

export default function HomePage() {
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MyHome />
      </main>
      <Footer />
    </div>
  );
}
