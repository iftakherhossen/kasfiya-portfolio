import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import database from '../../assets/database';

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="p-4 rounded-lg shadow-lg md:px-6 md:py-8">
               <hr className="border-gray-100 shadow-lg sm:mx-auto lg:my-8" />
               <div className="flex justify-center items-center my-6">
                    <a href={database.links.facebook} className="mx-1 text-2xl">
                         <FaFacebook />
                    </a>
                    <a href={database.links.github} className="mx-1 text-2xl">
                         <FaGithub />
                    </a>
                    <a href={database.links.instagram} className="mx-1 text-2xl">
                         <FaInstagram />
                    </a>
                    <a href={database.links.linkedIn} className="mx-1 text-2xl">
                         <FaLinkedin />
                    </a>
                    <a href={`tel:${database.links.phone}`} className="mx-1 text-2xl">
                         <FaPhoneSquareAlt />
                    </a>
               </div>               
               <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© {currentYear} <Link to="/" className="hover:underline">
                    Kasfiya Rab Bin Noor</Link> All Rights Reserved. Developed By <a href="https://iftakher-hossen.vercel.app/" className="hover:underline">Iftakher Hossen</a>
               </span>
          </footer>
     );
};

export default Footer;