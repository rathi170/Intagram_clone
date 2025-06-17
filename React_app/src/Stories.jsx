import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Stories() {
  const [stories,setStories]=useState([]);

    useEffect(()=>{
          fetch("http://localhost:3000/stories").
          then((data)=>data.json()).
          then((data)=> setStories(data) ).
          catch((error)=>console.log(error))
        },[]);

    const navigate=useNavigate();
   let tot=stories.length;
  return (
     <div className="story d-flex m-2">
       { 
       stories.length >0 ? (
                stories.map((post)=>(
                    <div   key={post.id} className="mx-2" onClick={()=>{navigate(`/story/${post.id}/${tot}`)}}>
                        <div className="gradient-border">
                            <img src={post.storyImage} alt="profile" className=" story-dp rounded-circle"></img>
                            </div>
                            <p className="text-truncate" style={{width:"50px"}}>{post.username}</p>
                             </div>))
                              ):(<div> Loading </div>)
           }





    </div>
  )
}

export default Stories