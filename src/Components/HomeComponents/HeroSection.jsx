import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';
import database from '../../assets/database';

const HeroSection = () => {
     return (
          <section id="home">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px] pt-60 mb-10">
                    <div className="flex items-start justify-end px-6 md:px-0" data-aos="fade-right">
                         <div className="h-3/4 flex items-center md:pl-20">
                              <div>
                                   <div className="flex items-center">
                                        <h3 className="text-3xl uppercase font-extrabold">
                                             <Typewriter
                                                  options={{
                                                       strings: database.myself.welcomingMessage,
                                                       autoStart: true,
                                                       loop: true,
                                                       stopFor: 3000
                                                  }}
                                                  style={{ cursor: 'none' }}
                                             />
                                        </h3>
                                        <div className="border-[1px] border-black w-2/3 ml-4"></div>
                                   </div>
                                   <h1 className="text-5xl uppercase font-black my-4">{database.myself.name}</h1>
                                   <h4 className="text-2xl font-bold">
                                        <Typewriter
                                             options={{
                                                  strings: database.myself.designation,
                                                  autoStart: true,
                                                  loop: true,
                                             }}
                                        />
                                   </h4>
                                   <div className="flex items-center mt-6">
                                        <HashLink to="/#contact">
                                             <button className="btn btn-bg outline-0 border-0 text-white tracking-widest">Hire Me</button>
                                        </HashLink>
                                        <a href={database.links.resumeLink}>
                                             <button className="btn btn-bg outline-0 border-0 text-white ml-4 tracking-widest">Get Resume</button>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-center items-center px-6 md:px-0" data-aos="fade-left">
                         <img src="./hero-1.webp" alt="hero-1" className="sm:w-[445px] md:w-[600px]" draggable={false} />
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;