import React from 'react';
import database from '../../assets/database';
import { BiCategoryAlt, BiTime } from 'react-icons/bi';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const MainContent = () => {
     const params = useParams();
     const blog = database.blogs.filter(blog => blog.slug === params.slug)[0];

     return (
          <div>
               <div className="md:p-5 mb-12 md:mb-0">
                    <figure>
                         <img src={blog.image} alt={blog.title} className="w-full h-[420px]" />
                    </figure>
                    <div className="px-2 pb-9">
                         <div className="pt-5 pb-2">
                              <h1 className="text-3xl font-bold">{blog.title}</h1>
                         </div>
                         <div className="flex items-center text-md">
                              <p className="py-0 text-slate-500 flex justify-end items-center"><BiTime className="mr-1" /> {moment(blog.publishedAt).fromNow()}</p> &nbsp; - &nbsp;
                              <p className="py-0 text-slate-500 flex justify-end items-center"><BiCategoryAlt className="mr-1" /> {blog.category}</p>
                         </div>
                    </div>
                    <div className="px-2 pb-5">
                         <p className="text-lg leading-relaxed text-slate-600 first-letter:capitalize whitespace-pre-wrap text-medium">{blog.content}.</p>
                    </div>
               </div>
          </div>
     );
};

export default MainContent;