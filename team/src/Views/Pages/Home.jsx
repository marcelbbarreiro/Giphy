import React, {useEffect, useState} from "react";
import '../../styles/style.css';
import { MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/20/solid'
import useFirestore from "../../hooks/useFirestore";
import toast,{ Toaster } from 'react-hot-toast';





function Home() {
const [searchTerm, setSearchTerm] = useState("");
const {getGifsData,deleteGifData} = useFirestore();
const [memeData, setmemeData] = useState([]);

useEffect (() => {
    if (!searchTerm) { 
        getGifsData('marcelbarreiro@gmail.com').then((data) => {
        setmemeData (data);
        })
    }
   
},[searchTerm])


const handleSearch = (searchTerm)=> {
    setSearchTerm(searchTerm);
    const searchData = memeData.filter((val) => {
        if(searchTerm == ""){
          return;
        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }})
        setmemeData (searchData);
}

const deleteGif = (src,title) => {
  deleteGifData("marcelbarreiro@gmail.com", title, src)
  setTimeout(()=>{
    getGifsData('marcelbarreiro@gmail.com').then((data) => {
      setmemeData (data);
    })
    toast.success("Meme deleted succesfully")
  },1000)
}

  return (

    <div>
<div className="w-full bg-slate-50 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
            placeholder="Student name"
            onChange={(event) => {
              handleSearch(event.target.value);
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
    <div className=" ">
      <div className=" mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {

              memeData.map((val,index) => {
                return(
                  <div className="drop-shadow-xl " key={index}>
                      <img src={val.src} alt="" />
                      <h3 className="text-center text-white bg-[#2d0909] py-1">{val.title}</h3>
                      {/* <p className="price">${val.price}</p> */}
                      <button className="drop-shadow-xl w-full bg-red-800 text-white py-1 rounded-b-lg hover:bg-red-900 hover:text-white" onClick={()=>deleteGif(val.src,val.title)}>Delete</button>
                  </div> 
                )
              })
          }

      </div>
    </div>
    </div>





    <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Home