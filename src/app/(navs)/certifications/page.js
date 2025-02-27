"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../navStyle.module.css";
import PdfFrame from "../../components/pdfFrame";
import { CertData } from "@/app/lib/certs";
import CertMenu from "@/app/components/certMenu";
import { statement } from "@/app/lib/statement";
import wifi from "../../../../public/png/wifi.png";
import CertSelector from "@/app/components/certSelector";

export default function CertificatePage() {
  const [choice, setChoice] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1224);
    };
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const press = (value) => {
    setChoice(value);
  };

  const handleSelection = (value) => {
    setChoice(value);
  };

  return (
    <>
      {isDesktop ? (
        <div className={styles.certContainer}>
          {CertData.map((data) => (
            <CertMenu
              key={data.skills}
              title={data.name}
              wrapperStyle={styles.certWrapper}
              btnStyle={styles.certButton}
              onpress={press}
              data={data}
            />
          ))}
        </div>
      ) : (
        <CertSelector onChange={handleSelection} containerStyle={styles.certContainer} />
      )}

      {choice ? (
        <div className={styles.main}>
          <PdfFrame
            title="Cisco's Networking Basics Certificate"
            desc={<span style={{textDecoration: "underline"}}>Download this Certificate</span>}
            src={`/pdf/${choice}`}
            frameStyle={styles.iframe}
          />
        </div>
      ) : (
        <div className={styles.main}>
          <Image alt="WiFi icon" src={wifi} />
          <details className={styles.details}>
            <summary className={styles.summary}>Motivation and Inspiration</summary>
            {statement}
          </details>
        </div>
      )}
    </>
  );
}
