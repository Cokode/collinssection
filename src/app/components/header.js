"use client";
import "material-symbols";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import "@/app/globals.css";
import { geistSans } from "../../../public/fonts/fonts";
import NavMenu from "./menu";

let scrollEndPos = 0;

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1224);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  // Use effect to control how the Nav displays on scroll event. 
  // To be implemented in full
  useEffect(() => {
    const headercontainer = document.querySelector(".mainHeader");

    addEventListener("scroll", (event) => {

      if (scrollEndPos > window.scrollY) {

        /*
          In this line write code to position the Nav bar to top 
          on user attempt to scroll up the document. 

        */
       // window.alert("Hey! you tried to scroll back up?");
      }

      console.log("scrollEndPos :", scrollEndPos);
    });

    addEventListener("scrollend", (event) => {
      scrollEndPos = window.scrollY;
    });

  }, []);

  // Function to toggle nav display open/close
  // when called by the onclick event
  const openNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {
        isDesktop? 
          (
            <div className="mainHeader">
              <nav className={`${geistSans.className} antialiased`}>
                <Link href="/">Home</Link>
                <Link href="/certifications">Certifications</Link>
                <Link href="#">Projects</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="#">Contact</Link>
              </nav>
            </div>
          )
          :
          (

            <div className='mainHeader'>
              { showNav ? 
                  <span onClick={openNav} id="hamburger" className="material-symbols-outlined">menu_open</span>
                  :
                  <span onClick={openNav} className="material-symbols-outlined">menu</span>
              }
              <h4>Menu</h4>    
            </div>
          )

      }
    {showNav && <NavMenu /> }
    </>
  );
}