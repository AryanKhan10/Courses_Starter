import SingleCard from "./SingleCard";
import { useState } from "react";
function Card({courses, catagory}){
    // console.log(courses)

    const[likedCourses, setLikeCources] = useState([]);

    const getCourses =() =>{
        if(catagory==='All'){

            let allCourses = [];
            Object.values(courses).forEach((coursesArray)=>
                coursesArray.forEach((course)=>{
                    allCourses.push(course)
                })
            )
            return allCourses
        }
        else{
            return courses[catagory]
        }
    }
    // console.log(courses)
    return(
        <div className="flex flex-wrap space-x-2 w-3/5 mx-auto">
            {
                getCourses().map((course)=>{
                   return <SingleCard key={course.id} course={course} likedCourses={likedCourses} setLikeCources={setLikeCources}/>
                })

            }
        </div>
    )

}
export default Card;