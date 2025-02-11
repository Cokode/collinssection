import Image from "next/image";
import styles from "./page.module.css";
import MyHome from "./@components/myHome";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MyHome />
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Welcome to my portfolio! The site is under construction, soon you can explore some of my certifications, projects, and blogs.
        </a>
      </footer>
    </div>
  );
}
