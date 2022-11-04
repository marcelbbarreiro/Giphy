import React, {useState} from "react";
import '../../styles/style.css';
import data from "../../data/TemplateData.json";
import { MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/20/solid'





function Home() {
const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
<div className="w-full bg-slate-600 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div><div className="w-full pt-6">

      <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search candidates
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="John Smith"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Search</span>
        </button>
      </div>
    </div>
      </div>
      </div>
    <div className="templateContainer  ">
      <div className="template_Container">
      {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }

      </div>
    </div>
    </div>






    </div>
  )
}

export default Home