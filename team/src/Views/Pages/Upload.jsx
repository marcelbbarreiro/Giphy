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
    <div>
            <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Insert Title
      </label>
      <div className="mt-1">
        <input
        onChange = {(e)=> setiTtleData(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Create Tittle"
          value={tittleData}
        />
         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Insert Link
      </label>
        <input
         onChange = {(e)=> setLinkData(e.target.value)}
          type="text"
          name="tittle"
          id="tittle"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="insert link"
          value={linkData}
        />
      </div>
    </div>
  
      <button
      onClick={handleUpload}
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Upload Gif
      </button>
      <Toaster position="top-center" reverseOrder={false} />

    </div>




  )
}

export default Upload