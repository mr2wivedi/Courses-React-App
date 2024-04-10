import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  
  const getCourse = () => {
    if(category==="All"){
      let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    console.log(allCourses)
    return allCourses;
  }
  else{
    return courses[category]; 
  }

    }
    
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourse().map((course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))}
    </div>
  );
};

export default Cards;
