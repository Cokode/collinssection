import styles from "../navStyle.module.css";
import PdfFrame from "../../components/pdfFrame";

export default function BlogPage() {
  
  return (
    <div className={styles.main}>
    <iframe
      title= "Ciscos Networking Basics Certificate"
      allowFullScreen
      loading="lazy"
      src="/pdf/networking_basics.pdf"  // <-- Correct path
      className={styles.iframe}
    />
    <a target="_blank" href="/pdf/networking_basics.pdf" download="networking_basics.pdf">
      download the file
    </a>
    </div>
  );
}






