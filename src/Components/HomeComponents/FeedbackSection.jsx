import React from 'react';
import Carousel from 'react-elastic-carousel';
import database from '../../assets/database';
import Rating from 'react-rating';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

const breakPoints = [
     { width: 1, itemsToShow: 1 },
     { width: 550, itemsToShow: 1, itemsToScroll: 1 },
     { width: 768, itemsToShow: 2, itemsToScroll: 1 },
     { width: 1200, itemsToShow: 2, itemsToScroll: 1 }
];

const FeedbackSection = () => {
     return (
          <section id="feedback">
               <div className="h-full px-8 md:px-20 pt-20 pb-16 md:pb-24">
                    <div className="flex justify-center items-center flex-col mb-10">
                         <h2 className="text-3xl uppercase font-bold mb-5">Clients Feedback</h2>
                         <div className="md:w-1/2">
                              <p className="text-slate-400 text-center">{database.descriptions.feedbackDescription}</p>
                         </div>
                    </div>
                    <div>
                         <Carousel
                              breakPoints={breakPoints}
                              itemsToScroll={1}
                              showArrows={false}
                              //autoPlaySpeed={3000}
                              //enableAutoPlay
                              //theres no loop function is this new versions thats why i comment auto play
                              style={{ cursor: 'grab' }}
                         >
                              {
                                   database.feedback.map(({ id, name, image, feedback, ratings }) => <div key={id} className="card shadow-md w-full md:mx-5 card-side my-16 py-1 flex-col sm:flex-row">
                                        <figure className="w-full sm:w-2/6 sm:pl-auto">
                                             <img src={image} alt={name} className="w-32 rounded-full sm:ml-auto" draggable={false} />
                                        </figure>
                                        <div className="card-body w-full sm:w-4/6">
                                             <h2 className="card-title">{name}</h2>
                                             <p>{feedback}</p>
                                             <Rating
                                                  initialRating={ratings}
                                                  readonly
                                                  emptySymbol={<ImStarEmpty className="text-lg mx-[0.2px]" />}
                                                  fullSymbol={<ImStarFull className="text-lg mx-[0.2px]" />}
                                             />
                                        </div>
                                   </div>)
                              }
                         </Carousel>
                    </div>
               </div>
          </section>
     );
};

export default FeedbackSection;