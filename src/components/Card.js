import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card=(props)=>{
    let course=props.course;
    let likedCoures=props.likedCoures;
    let setLikedCourses=props.setLikedCourses;
    function clickHandler(){
        if (likedCoures.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id));
            toast.warning("Like Removed");
        }else{
            if (likedCoures.length===0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Like Successfully.")
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px]
                 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCoures.includes(course.id)?<FcLike fontSize="1.75rem"></FcLike>:<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2 ">
                    {
                        course.description.length>100?course.description.substring(0,100)+"...":course.description
                    }
                </p>
            </div>
        </div>
    )
};

export default Card