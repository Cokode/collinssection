import styles from "../(navs)/navStyle.module.css";

export default function PdfFrame({title, src, desc}) {
  
  return (
    <>
      <iframe
        title={title}
        allowFullScreen
        loading="lazy"
        src={src}
        className={styles.iframe}
      />
      <a target="_blank" href="" download={"./pdf/networking_basics.pdf"} >{desc}</a>
    </>
  );
}
