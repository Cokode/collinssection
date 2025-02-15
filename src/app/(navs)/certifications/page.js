"use client"

import React, {useState} from "react";
import styles from "../navStyle.module.css"
import PdfFrame from "@/app/@components/pdfFrame";

export default function Something() {
  
  return (
    <div className={styles.main}>
      <PdfFrame 
        title={"Ciscos Networking Basics Certificate"}
        src={"./pdf/networking_basics.pdf"}
        desc={"Click to download"}
      />
    </div>
  );
}
