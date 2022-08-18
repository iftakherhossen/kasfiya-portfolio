import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import database from '../../assets/database';

const SocialMediaSection = () => {
     return (
          <div className="flex justify-center items-center my-6">
               <a href={database.links.facebook} className="mx-1 text-2xl">
                         <FaFacebook />
                    </a>
                    <a href={database.links.twitter} className="mx-1 text-2xl">
                         <FaTwitter />
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
     );
};

export default SocialMediaSection;