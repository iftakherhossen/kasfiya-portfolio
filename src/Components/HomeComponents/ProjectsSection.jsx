import React from 'react';
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import database from '../../assets/database';
import SingleProjectSection from './SingleProjectSection';

const ProjectsSection = () => {
     return (
          <section id="projects">
               <div className="h-full px-10 md:px-20 pt-20 pb-16 md:pb-24">
                    <div className="mb-5">
                         <h3 className="text-4xl uppercase font-bold leading-snug">Quality Work <br /> Recently Done Projects</h3>
                         <div className="flex items-center mt-1">
                              <VscDebugBreakpointLog className="text-[#4B57DE]" />
                              <div className="border-[1px] border-[#4B57DE] w-48 mt-0.5"></div>
                         </div>
                    </div>

                    <Tabs
                         activeTab="1"
                         className="text-lg mt-10"
                         ulClassName=""
                         activityClassName="bg-green-100"
                    >
                         <Tab title="Web Design" className="mr-3">
                              <div className="columns-1 sm:columns-2 md:columns-3 gap-6 p-2 mt-10">
                                   {
                                        database.projects.WebDesign.map(project => <SingleProjectSection key={project.id} project={project} />)
                                   }
                              </div>
                         </Tab>
                         <Tab title="Graphics Design" className="mr-3">
                              <div className="columns-1 sm:columns-2 md:columns-3 gap-6 p-2 mt-10">
                                   {
                                         database.projects.GraphicsDesign.map(project => <SingleProjectSection key={project.id} project={project} />)
                                   }
                              </div>
                         </Tab>
                    </Tabs>



               </div>
          </section>
     );
};

export default ProjectsSection;