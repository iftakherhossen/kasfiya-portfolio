import React from 'react';
import MainContent from '../Components/BlogComponents/MainContent';
import Sidebar from '../Components/BlogComponents/Sidebar';
import Footer from '../Components/Common/Footer';
import Navigation from '../Components/Common/Navigation';
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollToTop from "react-scroll-to-top";

const SingleBlog = () => {
     return (
          <div>
               <Navigation />
               <div className="container mx-auto py-8 md:pt-32 md:pb-16 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-5">
                         <div className="md:col-span-2">
                              <MainContent />
                         </div>
                         <Sidebar />
                    </div>
               </div>
               <Footer />

               {/* For Scroll to Top Button */}
               <ScrollToTop
                    smooth
                    color="#4458dc"
                    style={{ width: 45, height: 45, paddingLeft: 8, borderRadius: 100, backgroundColor: '#FCFAFC', right: 100, bottom: 35 }}
                    className="animate-bounce"
               />

               {/* For Messenger Chat Plugin */}
               <MessengerCustomerChat
                    pageId="105104175511987"
                    appId="313493657405238"
               />
          </div>
     );
};

export default SingleBlog;