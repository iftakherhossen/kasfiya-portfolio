import React from 'react';
import database from '../../assets/database';

const TwitterSection = () => {
     return (
          <div>
               {/* <a className="twitter-timeline" href="https://twitter.com/KasfiyaUpoma?ref_src=twsrc%5Etfw">Tweets by KasfiyaUpoma</a>
               <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}

               <div className="mt-5 twitter-timeline">
                    <h2 className="text-2xl font-bold mb-5">Tweets by <a href={database.links.twitter} className="text-[#00acee]">@KasfiyaUpoma</a></h2>
                    <a className="twitter-timeline"
                         href="https://twitter.com/KasfiyaUpoma?ref_src=twsrc%5Etfw"
                         data-width="300"
                         data-height="300"
                    > </a>
               </div>
          </div>
     );
};

export default TwitterSection;