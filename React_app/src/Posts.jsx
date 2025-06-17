import React from 'react'
import {useState,useEffect} from 'react'
function Posts() {
    const [posts,setPosts]=useState([]);
    const [visibleId, setVisibleId] = useState(null);
const [comment, setComment] = useState("");
    useEffect(()=>{
      fetch("http://localhost:3000/posts").
      then((data)=>data.json()).
      then((data)=> setPosts(data) ).
      catch((error)=>console.log(error))


    },[]);

  return ( 
    <div className="d-flex justify-content-center">

       {
        posts.length >0 ?(
            <div>
            {
                posts.map((post)=>(
                    <div className="my-3" key={post.id}>
                        <div className='d-flex'>
                            <img className="dp rounded-circle" src={post.imageUrl} alt="profile"></img>
                            <h4>{post.username}</h4>
                            </div>
                        
                        <img className="post" src={post.imageUrl} alt=""></img>
                        <div> 
                            <i className="bi bi-suit-heart"></i>
                          <i className="bi bi-chat" 
                            onClick={() => setVisibleId(visibleId === post.id ? null : post.id)} 
                             style={{ cursor: 'pointer' }}></i>
                           <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <b>{post.likes} Likes</b>
                            </div>
                            <p >{post.caption}</p>
                            {visibleId === post.id && (
                            <div>
                                {post.comments && post.comments.map((cmt, i) => (
                                <div key={i}>
                                  <p className="m-3"><b>{cmt.username}</b></p>
                                  <p className="m-3">{cmt.text}</p>
                                 </div>
                                    ))}
                            </div>
                  )}


                        </div>
                ))
            }

         
          
          </div>
          ): (
            <div>loading </div>)
       }



    </div>
  )
}

export default Posts