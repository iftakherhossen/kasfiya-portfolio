import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SubscribeSection = () => {
     const [email, setEmail] = useState('');

     const handleSubscribe = () => {
          toast("Subscribed Successfully", { type: "success" });
     }

     const validateEmail = () => {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return re.test(String(email).toLowerCase());
     }

     console.log(email)

     return (
          <div className="my-10">
               <h2 className="text-2xl font-bold mb-5">Newsletter</h2>
               <div className="flex items-center">
                    <input
                         type="email"
                         placeholder="Email"
                         className={`input w-full bg-slate-200 focus:outline-0 rounded-r-none ${email} === '' || 'invalid:bg-red-200'`}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                    />
                    <button
                         className="btn uppercase rounded-l-none bg-[#4458dc] text-white border-0 disabled:text-slate-100 disabled:cursor-none"
                         onClick={handleSubscribe}
                         disabled={email === '' || email !== validateEmail()}
                    >Subscribe</button>
               </div>

               <Toaster
                    position="bottom-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default SubscribeSection;