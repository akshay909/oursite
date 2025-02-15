"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Header() {

   const [isSticky, setIsSticky] = useState(false);

   const handleScroll = () => {
      // You can adjust the scroll threshold as needed
      if (window.scrollY > 100) {
         setIsSticky(true);
      } else {
         setIsSticky(false);
      }
   };

   useEffect(() => {
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header className={`p-0 header ${isSticky ? 'sticky' : ''}`}>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <Link href="/" className="navbar-brand">
                  <Image
                     src="/images/logo.png"
                     alt="Example Image"
                     width={120}
                     height={50}
                     className=""
                  />
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav m-auto gap-4 text-capitalize">
                     <li className="nav-item">
                        <Link href="/" className="nav-link">
                           seo & lead generation
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/about" className="nav-link">
                           Revenue marketing & CRO
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/about" className="nav-link">
                           UX & interactive
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/about" className="nav-link">
                           Technology
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/about" className="nav-link">
                           Who we are
                        </Link>
                     </li>
                  </ul>
                  <Link href="/" className="mainbtn">
                     Get a Propsal
                  </Link>
               </div>
            </div>
         </nav>
      </header>
   );
}