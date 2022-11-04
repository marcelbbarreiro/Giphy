import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="w-full bg-slate-600 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div><div className="w-full "></div>
        <input className="w-full mt-6 " id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
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
    </>
  );
}

export default App;
