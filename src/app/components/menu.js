import React from "react";
import Link from "next/link";
import { geistSans } from "../../../public/fonts/fonts";



export default function NavMenu() {

  const onChange = () => {
    // do something
  };

  return (
    <div className="mainHeaderMobile">
      <nav className={`${geistSans.className} antialiased`}>
        <Link href="/">Home</Link>
        <Link href="/certifications">Certifications</Link>
        <Link href="#">Projects</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="#">Contact</Link>
      </nav>
    </div>
  );
};