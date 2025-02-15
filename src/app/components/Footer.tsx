import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
   const currentYear = new Date().getFullYear();
   return (
      <div className="container-fluid">
         <footer className="pt-5">
            <div className="row footrow">
               <div className="col-md-6 mb-3">
                  <Link href="/" className="navbar-brand">
                     <Image
                        src="/images/logo.png"
                        alt="Example Image"
                        width={120}
                        height={50}
                        className=""
                     />
                  </Link>
               </div>
               <div className="col-6 col-md-2 mb-3">
                  <h5>Services</h5>
                  <ul className="nav flex-column text-capitalize">
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Digital marketing services
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Seo services
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           PPC services
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Web design & development services
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-md-2 mb-3">
                  <h5>Tools</h5>
                  <ul className="nav flex-column text-capitalize">
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           color picker
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           conversion rate calculator
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Lorem ipsum generator
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-md-2 mb-3">
                  <h5>Knowledgebase</h5>
                  <ul className="nav flex-column text-capitalize">
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Digital marketing
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Seo
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           PPC
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           Social media
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link href="/" className="nav-link p-0">
                           web design
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
               <p>© {currentYear} Company, Inc. All rights reserved.</p>
               <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                     <a className='text-dark' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} /></a>
                  </li>
                  <li className="ms-3">
                     <a className='text-dark' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} /> </a>
                  </li>
                  <li className="ms-3">
                     <a className='text-dark' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} />
                     </a>
                  </li>
               </ul>
            </div>
         </footer>
      </div>
   );
}