import moment from 'moment';
import React, { useEffect, useState } from 'react';

const GithubSection = () => {
     const [repos, setRepos] = useState([]);

     useEffect(() => {
          fetch('https://api.github.com/users/kasfiyaupoma/repos')
               .then(res => res.json())
               .then(data => setRepos(data))
     }, []);

     const sorted = repos.sort((a, b) => {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
     }).reverse();

     return (
          <div>
               <h2 className="text-2xl font-bold mb-5">Github Repositories</h2>
               <ul className="w-full">
                    {
                         sorted.map(repo => <li className="bg-slate-100 py-3 px-4 hover:bg-slate-100 border-b-[0.5px] border-slate-300" key={repo.id}>
                              <h3 className="text-lg m-0 p-0 font-medium first-letter:capitalize"><a href={repo.html_url} className="hover:text-[#4458dc] hover:underline">{repo.name}</a></h3>
                              <p className="text-sm text-slate-600 m-0 p-0 ">Created {moment(repo.created_at).fromNow()}</p>
                         </li>)
                    }
               </ul>
          </div>
     );
};

export default GithubSection;