import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const SingleProjectSection = ({ project }) => {
     const { projectName, projectDescription, projectImage, projectUrl, projectGithubLink, client } = project;

     return (
          <div>
               {
                    !client ? <div className="card w-full h-full rounded-none mb-3 md:mb-0" data-aos="fade-up">
                         <figure className="relative figure">
                              <img src={projectImage} alt={projectName} className="block rounded-none w-[450px] h-full shadow-md hover:shadow-xl aspect-auto" draggable={false} />

                              <div className="overlay bg-[#FCFAFC] flex justify-center items-center">
                                   <div className="flex justify-center items-center">
                                        <a href={projectUrl}><FiLink className="text-4xl" /></a>
                                        &nbsp; &nbsp; &nbsp;
                                        <a href={projectGithubLink}><FaGithub className="text-4xl" /></a>
                                   </div>
                              </div>
                         </figure>
                         <div className="bg-transparent p-4 mb-2">
                              <h2 className="text-2xl font-bold mb-1">{projectName}</h2>
                              <p className="text-base">{projectDescription}</p>
                         </div>
                    </div> : <div className="card w-full h-full rounded-xl mb-3 md:mb-0" data-aos="fade-up">
                         <figure className="relative figure2">
                              <img src={projectImage} alt={projectName} className="block rounded-none w-[450px] h-full shadow-md hover:shadow-xl aspect-auto" draggable={false} />

                              <div className="overlay2 rounded-xl bg-[#FCFAFC] flex justify-center items-center flex-col px-10">
                                   <h2 className="text-2xl font-bold mb-1">{projectName}</h2>
                                   <p className="text-base">{projectDescription}</p>
                                   <h3 className="text-xl font-bold mt-1"><span className="text-slate-500">for</span> {client}</h3>
                              </div>
                         </figure>
                    </div>
               }
          </div>
     );
};

export default SingleProjectSection;