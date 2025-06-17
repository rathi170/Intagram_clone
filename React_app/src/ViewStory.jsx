import {useState,useEffect} from 'react'
import { useParams ,Link,useNavigate} from 'react-router-dom'
import Stories from './Stories';
function ViewStory() {
   
   const [storyView,setStoryView]=useState(null)
     const {id,tot}=useParams();
  
              useEffect(() =>{fetch("http://localhost:3000/stories/"+id).
              then((data)=>data.json()).
              then((data)=> {setStoryView(data)
                console.log(storyView);
              } ).
              catch((error)=>console.log(error));
              },[id]);
              const navigate=useNavigate();
              if(id > tot || id<=0){
                navigate('/')
              }
  return (
    <div>
          {/* { storyView ?(
                
                    <div className="d-flex" key={storyView.id}> 
                             <img  className="vh-100 justify-content-center" src={storyView.storyImage} alt="profile"></img>
                            <h5  >{storyView.username}</h5>
                      </div>
            
              ):(<div> Loading </div>)
        } */}

     

    {storyView && storyView.storyImage ? (
      <div className="d-flex justify-content-center align-items-center">
        
        <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
        <img src={storyView.storyImage} alt="profile" ></img>
         <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
   
   </div>
) : (
  <p>No image available</p>
)}
</div>
  );
}

export default ViewStory