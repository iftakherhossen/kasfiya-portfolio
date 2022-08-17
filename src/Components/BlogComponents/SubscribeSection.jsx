import React from 'react';

const SubscribeSection = () => {
     return (
          <div className="my-10">
               <h2 className="text-2xl font-bold mb-5">Newsletter</h2>
               <div className="flex items-center">
                    <input type="email" placeholder="Email" className="input w-full bg-slate-200 focus:outline-0 rounded-r-none" required />
                    <button className="btn uppercase rounded-l-none bg-[#4458dc] text-white border-0">Subscribe</button>
               </div>
          </div>
     );
};

export default SubscribeSection;