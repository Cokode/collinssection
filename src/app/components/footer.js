import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <a
        // href="#"
        // // target="_blank"
        // // rel="noopener noreferrer"
        
      >
        <Image
          style={styles.footerIcon}
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Welcome to my portfolio! This web page is under construction, soon you can explore my certifications, projects, and blogs.
      </a>
    </footer>
  );
};