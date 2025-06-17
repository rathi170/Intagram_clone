import {useState,useEffect} from 'react'
import axios from 'axios'
function Profile() {

    const [profile,setProfile]=useState([]);
    const [followers,setFollowers]=useState([]);
    const[unFollowed,setUnFollowed]=useState(0);
  useEffect(()=>{
       axios.get("http://localhost:3000/Profile")
       .then(data=>{
        setProfile(data.data);
        console.log(data);
       })
  },[])
  useEffect(()=>{
       axios.get("http://localhost:3000/Followers")
       .then(data=>{
        setFollowers(data.data);
        console.log(data);
       })
  },[unFollowed])

   const handleUnfollow = async (id) => {
  axios.delete("http://localhost:3000/Followers/" + id)
    .then(() => {
      alert("Unfollowed");
      setUnFollowed(prev => !prev); // safer way to toggle state
    })
    .catch(err => console.log(err));
};


  return (
<div>
        { profile.length >0 ?(
               <div className="m-5" >{
               
                profile.map((post)=>(
                    <div key={post.id}> 
                            <img  className="profile-new rounded-circle" src={post.ProfileImage} alt="profile"></img>
                            <h5>{post.username}</h5>

                        <input type="text" 
                             value={post.username}
                             name="username"
                             className="form-control my-2"
                           />
                        <input type="text" 
                             value={post.ProfileImage}
                             name="ProfileImage"
                             className="form-control my-2"
                            />
                        <button className="btn btn-primary">Update</button>

                 
                      </div>))
               }</div>
              ):(<div> Loading </div>)
        }
        <h3 className="m-5">Followers</h3>
         { profile.length >0 ?(
               <div className="m-5 " >{
                 
                followers.map((follow)=>(
                    <div className="d-flex my-2" key={follow.id}> 
                             <img  className="follow rounded-circle" src={follow.pic} alt="profile"></img>
                            <h5 className="follow-h5" >{follow.name}</h5>
                              <button className="btn btn-secondary ms-auto" onClick={()=>{handleUnfollow(follow.id)}}>unfollow</button>
                 
                      </div>))
               }</div>
              ):(<div> Loading </div>)
        }
  </div>
  );
}

export default Profile