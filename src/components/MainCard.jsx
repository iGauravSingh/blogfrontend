
import './MainCard.css'
import { Link, useNavigate } from "react-router-dom";

import BookmarkIcon from "./BookmarkIcon";



const MainCard = ({ id,cover,title,tags,likes,userName,userImage,discription}) => {
  const navigate = useNavigate()

  const handleClick =(id)=>{
    navigate(`../post/${id}`)
  }

  return (
    <div className="maincardelement">
        <img className='cardimage' src={cover} alt="cover" />
        <div className='userimagecontainer'>
            <img className='userimage' src={userImage} alt="user" />
            {userName}
        </div>
        <div className='maincardtitle'>
            <h2 className='mouseoverCalss' onClick={()=>handleClick(id)}>{title}</h2>
        </div>
        <div>
            <p>#{tags}</p>
        </div>
        <div className="maincardbottom">
        <div><span style={{fontWeight: 600}}>{likes.length}</span> likes</div>
        <BookmarkIcon id={id} title={title} />
        </div>
    </div>
  )
}

export default MainCard