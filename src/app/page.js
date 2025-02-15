import Image from "next/image";
import styles from "./page.module.css";
import MyHome from "./@components/myHome";
import Footer from "./@components/footer";

export default function LandingPage() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MyHome />
      </main>
      <Footer />
    </div>
  );
}
