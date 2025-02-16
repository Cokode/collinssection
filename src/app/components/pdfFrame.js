import React from "react";

export default function PdfFrame({title, desc, frameStyle}) {
  
  return (
    <>
      <iframe
        title={title}
        allowFullScreen
        loading="lazy"
        src="/pdf/Networking_Basics.pdf"
        className={frameStyle}
      />
      <a target="_blank" href="/pdf/Networking_Basics.pdf" download={"/pdf/Networking_Basics.pdf"} >{desc}</a>
    </>
  );
}
