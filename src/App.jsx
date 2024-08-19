import { useState,useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {filtdata, apiURL} from '../data'
import { toast } from 'react-toastify'

function App() {

const [courses,setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [catagory, setCatagory] = useState(filtdata[0].title)

const fetchData =async ()=>{
  setLoading(true)
  try{
        const res =await fetch(apiURL);
        const apiData=await res.json();
        setCourses(apiData.data);
      }
      catch(error){
        toast.error("Someting went wrong");
      }
      setLoading(false)
    
}
    useEffect(()=>{

        fetchData();
      
    },[])

    // console.log(courses)

  
  return (
   <>
      <Nav/>

      <Filter filtdata={filtdata} catagory={catagory} setCatagory={setCatagory}/>

      { loading ? (<Spinner/>): (<Cards courses={courses} catagory={catagory} setCatagory={setCatagory}/>)}
   </>
  )
}

export default App
