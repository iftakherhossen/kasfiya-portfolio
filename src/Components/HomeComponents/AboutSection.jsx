import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import database from '../../assets/database';

const AboutSection = () => {
     return (
          <section id="about">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full md:h-[700px] py-20">
                    <div className="flex justify-center items-center px-6 md:px-0"  data-aos="fade-right">
                         <img src={database.myself.heroImage2} alt="hero-2" className="sm:w-[445px] md:w-[600px]" draggable={false} />
                    </div>
                    <div className="flex items-end justify-start w-full h-full md:w-3/4 md:h-3/4 px-8 md:px-0 mt-5"  data-aos="fade-left">
                         <div>
                              <div>
                                   <h3 className="text-4xl uppercase font-bold leading-snug">Let's<br />Introduce<br />Myself</h3>
                                   <p className="my-5 text-slate-500">{database.descriptions.aboutText1}</p>
                                   <p className="text-slate-500">{database.descriptions.aboutText2}</p>
                                   <a href={database.links.resumeDownloadLink}>
                                        <button className="btn btn-bg outline-0 border-0 text-white tracking-wider mt-8">Download Resume</button>
                                   </a>
                              </div>
                              <div className="mt-8 flex items-center justify-end">
                                   <div className="border-[1px] border-slate-300 w-2/4 mr-3 shadow-sm"></div>
                                   <div className="flex items-center">
                                        <a href={database.links.facebook} className="mx-1 text-2xl">
                                             <FaFacebook />
                                        </a>
                                        <a href={database.links.github} className="mx-1 text-2xl">
                                             <FaGithub />
                                        </a>
                                        <a href={database.links.instagram} className="mx-1 text-2xl">
                                             <FaInstagram />
                                        </a>
                                        <a href={database.links.linkedIn} className="ml-1 text-2xl">
                                             <FaLinkedin />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default AboutSection;