import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserPostList = ({title,id}) => {

    const navigate = useNavigate()

    const handleClick = (id)=>{
        navigate(`/post/${id}`)
    }

  return (
    <div>
        <h3 style={{cursor: 'pointer', fontSize: '30px',paddingTop: '10px'}} onClick={()=>handleClick(id)}>{title}</h3>
    </div>
  )
}

export default UserPostList