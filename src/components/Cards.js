import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];
  console.log(courses)
  const getCourse = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <div>
      {getCourse().map((course) => {
        return <Card course={course} />;
      })}
    </div>
  );
};

export default Cards;
