import React from "react";

export default function PdfFrame({title, src, desc, frameStyle}) {
  
  return (
    <>
      <iframe
        title={title}
        allowFullScreen
        loading="lazy"
        src={src}
        className={frameStyle}
      />
      <a target="_blank" href="" download={"./pdf/networking_basics.pdf"} >{desc}</a>
    </>
  );
}
