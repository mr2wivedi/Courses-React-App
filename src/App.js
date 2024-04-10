import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { filterData,apiUrl } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify"
function App() {
  const [courses , setCourses] = useState(null)
  useEffect(()=>{

    const fetchData =async ()=>{
    try {
        const res = await fetch(apiUrl)
        const data = await res.json()x
        setCourses(data.data)
      } 
      
     catch (error) {
      toast.error("Something Went Wrong")
    }
  }
    fetchData()

  },[])

  return (

    <div>
      <Navbar/>
      <Filter filterData = {filterData}/>
      <Cards courses={courses}/>

    </div>
  );
}

export default App;
