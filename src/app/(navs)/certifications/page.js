import styles from "../navStyle.module.css";
import PdfFrame from "../../components/pdfFrame";
import { CertData } from "@/app/lib/certs";
import CertMenu from "@/app/components/certMenu";

export default function CertificatePage() {

  const press = (value) => {
    console.info(value);
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
            onpress={press} 
          />
        ))}
      </div>

      <div className={styles.main}>
        <PdfFrame 
          title={"Ciscos Networking Basics Certificate"}
          desc={"Click to download"}
          src={"/pdf/Networking_Basics.pdf"}
          frameStyle={styles.iframe}
        /> 
      </div>
    </>
  );
};
