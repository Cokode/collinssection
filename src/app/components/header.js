import Link from "next/link";
import "@/app/globals.css";
import { geistSans } from "../../../public/fonts/fonts";

export default function Header() {
  return (
    
    <header>
      <nav className={`${geistSans.className} antialiased`}>
        <Link href="/">Home</Link>
        <Link href="/navs/certifications/">Certifications</Link>
        <Link href="#">Projects</Link>
        <Link href="/navs/blogs/">Blogs</Link>
        <Link href="#">Contact</Link>
      </nav>
    </header>
  );
}