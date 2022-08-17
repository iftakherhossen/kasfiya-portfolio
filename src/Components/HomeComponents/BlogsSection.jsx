import React, { useState } from 'react';
import database from '../../assets/database';
import SingleBlogSection from './SingleBlogSection';

const BlogsSection = () => {
     const [show, setShow] = useState(false);

     return (
          <section id="blogs">
               <div className="h-full pt-20 pb-10">
                    <div className="flex justify-center items-center flex-col">
                         <h3 className="text-3xl mb-5 font-bold uppercase">Blogs</h3>
                         <div className="md:w-1/2">
                              <p className="text-slate-500 text-center px-8">Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering ithe</p>
                         </div>
                    </div>
                    <div className="flex justify-center">
                         <div className="mt-8 w-5/6 md:mb-5">
                              <div className="columns-1 sm:columns-2 md:columns-3 gap-5 mt-10">
                                   {
                                        show === true ? database.blogs.map(blog => <SingleBlogSection blog={blog} key={blog.id} />) : database.blogs.slice(0, 3).map(blog => <SingleBlogSection blog={blog} key={blog.id} />)
                                   }
                              </div>
                              {
                                   database.blogs.length > 3 && <div className="flex justify-center items-center">
                                        {
                                             show === true ? <button className="btn btn-primary" onClick={() => setShow(false)}>Show Less</button> : <button className="btn btn-primary" onClick={() => setShow(true)}>Show More</button>
                                        }
                                   </div>
                              }
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default BlogsSection;