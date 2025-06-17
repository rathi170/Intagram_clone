import React from 'react'
import {useNavigate} from 'react-router-dom'
function SideBar() {

  const nav=useNavigate();
  return (
    <div className="m-3">
    <div className="position-fixed d-flex flex-column gap-3">
        <img className="image" src="src\assets\image2.png" alt=""></img>
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-dots-fill"></i>Messager</div>
         <div><i className="bi bi-suit-heart"></i>Notification</div>
          <div><i className="bi bi-plus-square"></i>Create</div>
           <div onClick={()=>{nav("/profile")}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className="position-fixed bottom-0 d-flex flex-column gap-3 m-3">
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default SideBar