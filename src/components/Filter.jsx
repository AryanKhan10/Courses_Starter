function Filter({filtdata, catagory,setCatagory}){
    // console.log(filtdata)
    const catagoryHandler =(title)=>{
        setCatagory(title)
    }
    return(
        <div className="text-center">
            {
                filtdata.map((course)=>{
                  return  <button onClick={()=>catagoryHandler(course.title)}
                    className={`px-2 py-1 bg-white text-black rounded-md hover:bg-[#fce8ebde] my-4 mx-2
                    ${catagory===course.title ? 
                        "border-2 border-sky-950 bg-[#fce8ebda] ":
                        "border-2 border-sky-400"}` } 
                    key={course.id}>{course.title}</button>
                })
            }
        </div>
    )

}
export default Filter;