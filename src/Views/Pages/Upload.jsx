import React,{useState} from 'react'
import useFirestore from '../../hooks/useFirestore';
import toast,{ Toaster } from 'react-hot-toast';

const Upload = () => {
const {addGifData}= useFirestore()
const [linkData, setLinkData] = useState("");
const [tittleData, setiTtleData] = useState("");


const handleUpload = ()=> {
  addGifData("marcelbarreiro@gmail.com",tittleData,linkData)
  setLinkData("")
  setiTtleData("")
  toast.success("Link Upload")
}

  return (


    <div className="my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
      <label htmlFor="email" className="text-base mt-6 block text-sm font-medium text-gray-700">
        Insert Title
      </label>
      <div className="flex flex-col mt-1 ">
        <input
        onChange = {(e)=> setiTtleData(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="mt-1 mb-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Create Tittle"
          value={tittleData}
        />
         <label htmlFor="email" className="mt-1 block text-sm font-medium text-gray-700">
        Insert Link
      </label>
        <input
         onChange = {(e)=> setLinkData(e.target.value)}
          type="text"
          name="tittle"
          id="tittle"
          className="mb-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Insert URL Link"
          value={linkData}
        />
        <button
      onClick={handleUpload}
        type="button"
        className="block inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Upload Gif
      </button>
      <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  
      

    </div>




  )
}

export default Upload