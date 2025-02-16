import React from "react";

export default function PdfFrame({title, desc, frameStyle}) {
  
  return (
    <>
      <iframe
        title={title}
        allowFullScreen
        loading="lazy"
        src={`/pdf/networking_basics.pdf`}
        className={frameStyle}
      />
      <a target="_blank" href="/pdf/networking_basics.pdf" download={"/pdf/networking_basics.pdf"} >{desc}</a>
    </>
  );
}
