"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../navStyle.module.css";
import PdfFrame from "../../components/pdfFrame";
import { CertData } from "@/app/lib/certs";
import CertMenu from "@/app/components/certMenu";
import { statement } from "@/app/lib/statement";
import wifi from "../../../../public/png/wifi.png";

export default function CertificatePage() {
  const [choice, setChoice] = useState(null);

  const press = (value) => {
    setChoice(value);
  };

  return (
    <>
      <div className={styles.certContainer}>
        {CertData.map((data) => (
          <CertMenu
            key={data.skills}
            title={data.name}
            wrapperStyle={styles.certWrapper}
            btnStyle={styles.certButton}
            onpress={press} // Pass the press function as a prop
            data={data}
          />
        ))}
      </div>

      {choice ? (
        <div className={styles.main}>
          <PdfFrame
            title="Cisco's Networking Basics Certificate"
            desc="Click to download"
            src={`/pdf/${choice}`}
            frameStyle={styles.iframe}
          />
        </div>
      ) : (
        <div className={styles.main}>
          <Image alt="WiFi icon" src={wifi}  />
          <details className={styles.details} >
            <summary className={styles.summary} >Motivation and Inspiration</summary>
            {statement}
          </details>
        </div>
      )}
    </>
  );
}
