import React, { useState } from "react";
import Card from './Card';

const Cards=(props)=>{
    const[likedCoures,setLikedCourses]=useState([]);
    let category=props.category;
    let courses=props.courses;
    function getCourses(){
        if (category==="All"){
                let allCourses=[];
                Object.values(courses).forEach(array=>{
                    array.forEach(course=>{
                        allCourses.push(course);
                    })
                });    
            return allCourses;
        }else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>{
                    return(
                        <Card key={course.id}
                         course={course}
                         likedCoures={likedCoures}
                         setLikedCourses={setLikedCourses }
                         ></Card>
                    )
                })
            }

        </div>
    )
};

export default Cards;