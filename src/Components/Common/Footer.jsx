import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaSection from './SocialMediaSection';

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="p-4 rounded-lg shadow-lg md:px-6 md:py-8">
               <hr className="border-gray-100 shadow-lg sm:mx-auto lg:my-8" />
               <SocialMediaSection />              
               <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© {currentYear} <Link to="/" className="hover:underline">
                    Kasfiya Rab Bin Noor</Link> All Rights Reserved. Developed By <a href="https://iftakher-hossen.vercel.app/" className="hover:underline">Iftakher Hossen</a>
               </span>
          </footer>
     );
};

export default Footer;