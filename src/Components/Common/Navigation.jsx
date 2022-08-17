import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import database from '../../assets/database';

const Navigation = () => {
     const [scroll, setScroll] = useState(false);

     useEffect(() => {
          window.addEventListener("scroll", () => {
               setScroll(window.scrollY > 50);
          });
     }, []);

     return (
          <nav className={`fixed w-full z-10 ${scroll} ? "shadow-xl" : shadow-none`}>
               <div className="navbar bg-white text-black h-full">
                    <div className="grow sm:px-3 lg:pl-16">
                         <Link to="/" className="font-bold text-[#4458dc]">
                              <h1 className="text-3xl title">{database.myself.name}</h1>
                         </Link>
                    </div>

                    <div className="hidden px-2 mx-2 lg:flex pr-8">
                         <div className="flex items-center">
                              <HashLink to="/#home" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 uppercase text-lg font-bold">
                                   Home
                              </HashLink>
                              <HashLink smooth to="/#about" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                   About
                              </HashLink>
                              <HashLink smooth to="/#services" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                   Services
                              </HashLink>
                              <HashLink smooth to="/#projects" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                   Projects
                              </HashLink>
                              {
                                   database.blogs.length > 0 && <HashLink smooth to="/#blogs" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                        Blogs
                                   </HashLink>
                              }
                              <HashLink smooth to="/#contact" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                   Contact
                              </HashLink>
                         </div>
                    </div>

                    <div className="flex-none lg:hidden dropdown dropdown-left">
                         <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                              </svg>
                         </button>
                         <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 rounded-box w-52 mt-2">
                              <li>
                                   <HashLink to="/#home" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                        Home
                                   </HashLink>
                              </li>
                              <li>
                                   <HashLink smooth to="/#about" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn text-lg mx-1 uppercase font-bold">
                                        About
                                   </HashLink>
                              </li>
                              <li>
                                   <HashLink smooth to="/#services" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                        Services
                                   </HashLink>
                              </li>
                              <li>
                                   <HashLink smooth to="/#projects" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                        Projects
                                   </HashLink>
                              </li>
                              {
                                   database.blogs.length > 0 && <li>
                                        <HashLink smooth to="/#blogs" className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                             Blogs
                                        </HashLink>
                                   </li>
                              }
                              <li>
                                   <HashLink to="/contact" smooth className="btn hover:text-[#4458dc] btn-ghost hover:bg-transparent rounded-btn mx-1 text-lg uppercase font-bold">
                                        Contact
                                   </HashLink>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default Navigation;