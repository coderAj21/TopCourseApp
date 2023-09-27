import React from "react";
 const Filter=(props)=>{
    let Data=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }
    return (
        <div className=" w-12/12 flex flex-wrap max-w space-x-4 gap-y-4 max-auto py-4 justify-center">
            {
                Data.map((data)=>{
                    return(
                        <button className={`
                        text-lg px-2 py-1 rounded-md font-md
                        text-white bg-black hover:bg-opacity-50 border-2
                        transition-all duration-300
                        ${category===data.title?
                            "bg-opacity-60 border-white"
                            :"bg-opacity-40 border-transparent"}
                        `}
                        onClick={()=>filterHandler(data.title)}
                         key={data.id}>{data.title}</button>
                    )
                })
            }

        </div>
)};

export default Filter;