import React from 'react';
import SearchBarSection from './SearchBarSection';
import LatestPostSection from './LatestPostSection';
import SubscribeSection from './SubscribeSection';
import GithubSection from './GithubSection';

const Sidebar = () => {
     return (
          <div>
               <div className="md:p-5">
                    <SearchBarSection />
                    <LatestPostSection />
                    <SubscribeSection />
                    <GithubSection />
               </div>
          </div>
     );
};

export default Sidebar;