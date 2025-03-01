"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../page.module.css";
import deskt from "../.../../../../public/png/desktop_cloud_stack.png";
import host from "../.../../../../public/png/host.png";
import netMan from "../.../../../../public/png/network_manage.png";


export default function MyHome() {

   const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsDesktop(window.innerWidth >= 1224);
      };
      checkScreenSize(); // Initial check
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

  return (
    <div className={styles.secWrapper}> 
      <section >
        <h3 className={styles.name}>{ isDesktop ? "Collins Chinedu Amalimeh" : "Collins Amalimeh"}</h3>
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
          hidden={false} // remove the image on mobile screens
        />
    </section>
    <cite className={styles.cite}>Junior IT Support Specialist</cite>
    <div className={styles.iconWrapper} >
      <Image className={styles.icons} alt="WiFi icon" src={netMan}  />
      <Image className={styles.icons} alt="WiFi icon" src={host}  />
      <Image className={styles.icons} alt="WiFi icon" src={deskt}  />
    </div>
    </div>
  );
}