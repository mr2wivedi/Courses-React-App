import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#64748b]">
      <div>
        <Navbar className="" />
      </div>
      <div className="bg-[#64748b]">
        <div>
          <Filter filterData={filterData}
          category={category}
          setCategory={setCategory} />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
