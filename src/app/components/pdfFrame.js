import React from "react";

export default function PdfFrame({title, desc, src, frameStyle}) {
  
  return (
    <>
      <iframe
        title={title}
        allowFullScreen
        loading="lazy"
        src={src}
        className={frameStyle}
        height={"auto"}
        width={"auto"}
      />
      <a target="_blank" href={src} download={src} >{desc}</a>
    </>
  );
}
