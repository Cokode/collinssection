import styles from "../navStyle.module.css";
import PdfFrame from "../../components/pdfFrame";

export default function CertificatePage() {
  
  return (
    <div className={styles.main}>
       <PdfFrame 
        title={"Ciscos Networking Basics Certificate"}
        desc={"Click to download"}
        frameStyle={styles.iframe}
    /> 
    </div>
  );
}
