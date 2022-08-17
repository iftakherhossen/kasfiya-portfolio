import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import database from '../../assets/database';
import SearchBar from "material-ui-search-bar";

const SearchBarSection = () => {
     const [searchText, setSearchText] = useState('');
     const [results, setResults] = useState([]);
     const [notMatch, setNotMatch] = useState(true);
     
     const requestSearch = (searchedValue) => {
          setSearchText(searchedValue);

          const filteredItems = database.blogs.filter((item) => {
               return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });
          const unfilteredItems = !database.blogs.filter((item) => {
               return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });

          console.log(unfilteredItems);

          setResults(filteredItems);
          setNotMatch(unfilteredItems);
     };

     const cancelSearch = () => {
          setSearchText('');
          requestSearch(searchText);
          window.location.reload();
     };

     return (
          <div>
               <form>
                    <SearchBar
                         value={searchText}
                         onChange={(searchedValue) => requestSearch(searchedValue)}
                         onCancelSearch={() => cancelSearch()}
                         placeholder="Let's find out your interested topic/blog"
                         className="pl-1"
                         style={{ borderRadius: 8 }}
                    />
               </form>
               {
                    !notMatch && results.length === 0 && <div class="alert alert-error mt-4 py-3">
                         <div>
                              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>Results not found!</span>
                         </div>
                    </div>
               }
               <div className="pt-4">
                    {
                         results.map(({ id, title, slug }) => <div key={id} className="py-1 px-4">
                              <Link to={`/blog/${slug}`} className="text-slate-600 hover:text-[#4458dc] font-bold hover:underline">{title}</Link>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default SearchBarSection;