import React from 'react';
import database from '../../assets/database';

const ServicesSection = () => {
     return (
          <section id="services">
               <div className="h-full md:h-[700px] pt-20">
                    <div className="flex justify-center items-center flex-col">
                         <h3 className="text-3xl mb-5 font-bold uppercase">Services I Offer</h3>
                         <div className="md:w-1/2">
                              <p className="text-slate-500 text-center px-8">Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering ithe</p>
                         </div>
                    </div>
                    <div className="flex justify-center">
                         <div className="mt-20 w-5/6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2">
                                   {
                                        database.services.map(({ id, title, image, description }) => <div className="card w-full h-full shadow hover:shadow-xl hover:bg-[#FCFAFC]" key={id}  data-aos="fade-up">
                                             <figure className="px-10 pt-10">
                                                  <img src={image} alt={title} className="rounded-xl" draggable={false} />
                                             </figure>
                                             <div className="card-body">
                                                  <h2 className="card-title justify-center my-2">{title}</h2>
                                                  <p className="text-center">{description}</p>
                                             </div>
                                        </div>)
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ServicesSection;