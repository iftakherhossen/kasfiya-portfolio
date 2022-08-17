import moment from 'moment';
import React from 'react';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SingleBlogSection = ({ blog }) => {
     const { id, title, slug, image, content, publishedAt } = blog;

     return (
          <div className="card pb-5" key={id} data-aos="fade-up">
               <figure className="relative figure3 md:mx-1">
                    <img src={image} alt={title} className="h-[300px] aspect-auto block rounded-xl shadow hover:shadow-md" draggable={false} />

                    <div className="card-body overlay-text rounded-b-xl">
                         <h2 className="card-title text-black">{title}</h2>
                         <p className="text-base text-black">
                              {content.slice(0, 100)}... <Link to={`/blog/${slug}`} className="text-slate-900 font-bold hover:underline">Read More</Link>
                         </p>
                         <p className="py-0 text-slate-500 flex justify-end items-center"><BiTime className="mr-1" /> {moment(publishedAt).fromNow()}</p>
                    </div>
               </figure>
          </div>
     );
};

export default SingleBlogSection;