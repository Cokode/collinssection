import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function MyHome() {


  return (
    <div className={styles.secWrapper}> 
      <section >
        <h3 className={styles.name}>Collins Chinedu Amalimeh</h3>
      </section>
      
      <section className={styles.section}>
        <Image 
          src="/img/IMG_5928.jpg"
          width={290}
          height={270}
          placeholder="blur"
          blurDataURL="data:..."
          className={styles.Image}
          alt="Picture of me"
          hidden ={false} // remove the image on mobile screens
        />

    </section>
    </div>
   
  )
}