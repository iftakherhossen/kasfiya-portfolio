import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import database from '../../assets/database';

const LatestPostSection = () => {
     return (
          <div className="my-10">
               <h2 className="text-2xl font-bold mb-5">Latest Post</h2>
               {
                    database.blogs.slice(0).reverse().map(({ id, image, title, slug }) => <div className="card card-side rounded-md shadow mb-5 h-[100px]" key={id}>
                         <figure>
                              <img src={image} alt={title} className="w-[100px] h-[100px]" draggable={false} />
                         </figure>
                         <div className="py-2 px-3">
                              <h2 className="card-title text-xl mb-1">{title}</h2>
                              <Link to={`/blogs/${slug}`} className="flex items-center text-sm text-slate-600 font-bold hover:underline">Read Full Post <HiOutlineArrowNarrowRight className="ml-1 text-lg" /></Link>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default LatestPostSection;