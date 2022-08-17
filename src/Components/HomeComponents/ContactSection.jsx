import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
     const form = useRef();
     let navigate = useNavigate();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_cdzerac', 'template_jkol7fc', form.current, 'BXkfgqxWdBLXqYLIO')
               .then((result) => {
                    console.log(result.text);
                    Swal.fire({
                         title: "Success!",
                         text: "Message send successfully! Please wait for a reply.",
                         icon: "success",
                         confirmButtonText: "OK"
                    })
               }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                         title: "Success!",
                         text: "Message can't send successfully! Please try again!",
                         icon: "error",
                         confirmButtonText: "OK"
                    })
               });

          e.target.reset();
          navigate('/')
     };

     return (
          <section id="contact" className="pt-10 pb-20">
               <div className="bg-image py-16">
                    <div className="flex justify-center items-center h-full">
                         <form className="w-full sm:w-3/4 md:w-2/4" ref={form} onSubmit={sendEmail}>
                              <div className="flex flex-col justify-center items-center">
                                   <input
                                        type="text"
                                        placeholder="Name"
                                        className="input input-bordered w-full max-w-xs text-[1em] md:max-w-sm focus:outline-0 bg-[#FCFAFC] my-2 required:border-[#D0B3FF]"
                                        name="name"
                                        required
                                        autoFocus
                                   />
                                   <input
                                        type="text"
                                        placeholder="Subject"
                                        className="input input-bordered w-full text-[1em] max-w-xs md:max-w-sm focus:outline-0 bg-[#FCFAFC] my-2 required:border-[#D0B3FF]"
                                        name="subject"
                                        required
                                   />
                                   <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered w-full text-[1em] max-w-xs md:max-w-sm focus:outline-0 bg-[#FCFAFC] my-2 required:border-[#D0B3FF]"
                                        name="email"
                                        required
                                   />
                                   <textarea
                                        className="textarea textarea-bordered w-full text-[1em] focus:outline-0 max-w-xs md:max-w-sm bg-[#FCFAFC] my-2 h-[100px] resize-none required:border-[#D0B3FF] "
                                        placeholder="Message"
                                        name="message"
                                        required
                                   ></textarea>
                                   <button
                                        className="btn my-2 bg-[#FCFAFC] border-none text-[#4957DD] text-[1.1em] hover:bg-[#D0B3FF] font-bold w-full max-w-xs md:max-w-sm"
                                        type="submit"
                                   >Send</button>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
};

export default ContactSection;