import React from "react";

export default function PdfFrame({ title, desc, src, frameStyle }) {
  return (
    <>
      <iframe
        title={title}
        loading="lazy"
        src={src}
        className={frameStyle}
      />
      <a target="_blank" href={src} download={src} >{desc}</a>
    </>
  );
}
