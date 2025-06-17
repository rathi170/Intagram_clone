import {useEffect,useState} from 'react'
import axios from 'axios'
function Suggestion() {
    const [profile,setProfile]=useState([]);
    const [suggestion,setSuggestion]=useState([]);
    useEffect(()=>{
          fetch("http://localhost:3000/Profile").
          then((data)=>data.json()).
          then((data)=> setProfile(data) ).
          catch((error)=>console.log(error))
        },[]);
         console.log(profile);
        useEffect(()=>{
          fetch("http://localhost:3000/Suggestion").
          then((data)=>data.json()).
          then((data)=> setSuggestion(data) ).
          catch((error)=>console.log(error))
        },[]);

    const handlefollow= async(image,id,username)=>{
      axios.post('http://localhost:3000/Followers',{"pic":image,"id":id,"name":username})
      .then(alert('followed'))
      .catch(err=>console.log(err))
    }


  return (
    <div>
      <div className="profile w-75 m-9">  
        { profile.length >0 ?(
            <div>
              {
                profile.map((post)=>(
                    <div className="m-10" key={post.id}>
                        <div className="d-flex m-10">
                            <img className="dp rounded-circle" src={post.ProfileImage} alt="profile"></img>
                            <h5>{post.username}</h5>
                            <small className="ms-auto text-primary">Switch</small>
                            </div> </div>))
                             }</div>):(<div> Loading </div>)
           }
           <div className="sugg d-flex">
            <p>Suggestion for you</p>
            <b className="ms-auto">See All</b>
           </div>
           </div>
        { suggestion.length >0 ?(
            <div className="w-75 m-2">
              {
                suggestion.map((post)=>(
                    <div className="my-2" key={post.id}>
                        <div className='d-flex'>
                            <img className="dp rounded-circle" src={post.ProfileImage} alt="profile"></img>
                            <h5>{post.username}</h5>
                            <a className="ms-auto text-primary" onClick={()=>{handlefollow(post.ProfileImage,post.id,post.username)}}>Follow</a>
                            </div> </div>))
                             }</div>):(<div> Loading </div>)
           }
    </div>
  )
}

export default Suggestion