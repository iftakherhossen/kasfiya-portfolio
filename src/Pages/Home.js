import React from 'react';
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollToTop from "react-scroll-to-top";
import database from '../assets/database';
import Footer from '../Components/Common/Footer';
import Navigation from '../Components/Common/Navigation';
import AboutSection from '../Components/HomeComponents/AboutSection';
import BlogsSection from '../Components/HomeComponents/BlogsSection';
import ContactSection from '../Components/HomeComponents/ContactSection';
import FeedbackSection from '../Components/HomeComponents/FeedbackSection';
import HeroSection from '../Components/HomeComponents/HeroSection';
import LanguageSection from '../Components/HomeComponents/LanguageSection';
import ProjectsSection from '../Components/HomeComponents/ProjectsSection';
import ServicesSection from '../Components/HomeComponents/ServicesSection';

const Home = () => {
     return (
          <div className="scroll-smooth">
               <Navigation />
               <HeroSection />
               <AboutSection />
               <div className="container mx-auto">
                    <ServicesSection />
                    <ProjectsSection />
                    {database.blogs.length > 0 && <BlogsSection />}
                    <FeedbackSection />
                    <ContactSection />
                    <LanguageSection />
               </div>
               <Footer />

               {/* For Messenger Chat Plugin */}
               <MessengerCustomerChat
                    pageId="105104175511987"
                    appId="313493657405238"
               />

               {/* For Scroll to Top Button */}
               <ScrollToTop
                    smooth
                    color="#4458dc"
                    style={{ width: 45, height: 45, paddingLeft: 8, borderRadius: 100, backgroundColor: '#FCFAFC', right: 100, bottom: 35 }}
                    className="animate-bounce"
               />
          </div>
     );
};

export default Home;