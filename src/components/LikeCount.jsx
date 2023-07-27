
import { BiLike,BiSolidLike } from "react-icons/bi"

import { useNavigate } from 'react-router-dom'

import { useLikePostMutation } from "../store/postSlice"
import { useEffect, useState } from "react"




const LikeCount = ({idPost,userId,likesArr}) => {

  const [likeSign,setLikeSign] = useState(false)
  const navigate = useNavigate()
    //console.log(like)
    const [likePost] = useLikePostMutation()
    
    
    const handleLike =async()=>{
      if(userId){
        const userI = {idPost,userId: userId}
        //console.log(userI)
        likePost(userI)
        setLikeSign(true)
      } else {
        navigate('/login')
      }
        
        
    }
    
    useEffect(()=>{
      if(idPost && likesArr.find(item => item === userId)){
        //console.log('already liked')
        setLikeSign(true)
      }
    },[idPost,likesArr,userId])

  return (
    <div>
        {likeSign ? <BiSolidLike /> : <BiLike onClick={handleLike} />}
        
    </div>
  )
}

export default LikeCount