import React from 'react';
import database from '../../assets/database';

const LanguageSection = () => {
     return (
          <div>
               <div className="flex flex-wrap justify-center mt-5">
                    <ul>
                         {
                              database.languages.map(({ id, name, text, fluency, progress }) => (
                                   <li className="tooltip relative mx-5 w-[90px] py-2 text-white font-bold rounded-md list-none bg-[#54cfffbd]" data-tip={`${name} - ${fluency}`} key={id}>
                                        <p className="mb-1 uppercase text-slate-900">{text}</p>
                                        <div className={`absolute content-[""] left-0 h-[4px] bottom-0 rounded-md bg-[#4458dc] ${progress}`} />
                                   </li>
                              ))
                         }
                    </ul>
               </div>
          </div>
     );
};

export default LanguageSection;