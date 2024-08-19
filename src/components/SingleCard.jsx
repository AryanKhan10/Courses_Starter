import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'

function SingleCard ({course,setLikeCources,likedCourses}){
    // console.log(course)
    
    const likeHandler = () =>{

    if(likedCourses.includes(course.id)){
        setLikeCources( (prev) =>prev.filter((cid)=> (cid!==course.id) ) )
        toast.warning("Like removed")
    }

    else{
        if(likedCourses.length == 0){
            setLikeCources([course.id])
            toast.success("Liked")

        }
        else{
            setLikeCources((prev)=>[...prev, course.id])
            toast.success("Liked")
        }
    }
    console.log(likedCourses)

}
    return(
        <div className='w-56 h-80 flex flex-col border-[0.3px] bg-[#fce8ebde] shadow-xl border-slate-400 rounded-lg my-6'>
            <div className="relative">
            <div>
                <img className='rounded-t-lg' src={course.image.url} alt="" />
            </div>
            <div className='pe-1 bg-white w-10 h-10 rounded-full absolute bottom-[-15px] right-3'>
                <button onClick={likeHandler}  className='p-1'>
                    
                        {likedCourses.includes(course.id)?
                        (<FcLike className='text-3xl'/>) : 
                        (<FcLikePlaceholder className='text-3xl'/>)}
                    
                </button>
            </div>
            </div>
            <div className='px-3'>
                <p className='text-md font-bold my-1'>{course.title}</p>
                <p className='text-zinc-700 text-sm'>
                    {
                        course.description.length>100 ? 
                        (course.description.substring(0,150)+"...") :
                        (course.description)
                    }
                
                </p>
            </div>
        </div>
    )
}
export default SingleCard;