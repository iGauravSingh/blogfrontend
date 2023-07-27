import React, { useEffect, useRef, useState } from 'react'
import { useReadOneQuery } from '../store/postSlice'
import { useParams } from 'react-router-dom'
import './PostDetail.css'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import Header from '../components/Header'
import Footer from '../components/Footer'


import LikeCount from '../components/LikeCount'



const PostDetail = () => {

    let item = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(item.id)
    const timestampRef = useRef(Date.now()).current;
    const { data: mainData,isLoading,issuccess,isError,error } = useReadOneQuery({id: item.id,sessionId: timestampRef})
    //console.log(data)
    

    console.log(mainData)
    

  

  return (
    <div>
<Header />
<div className="maincardcontainer">

  <div className="maincardleft">
    <LeftPanel />
  </div>
  <div className="maincardcenter">
  <div className='postDetailContainer'>
        <div>
            <img className='postDetailImage' src={mainData?.cover} alt='userCover' />
        </div>
        <div className='postDetailUser'>
            <div className='postDetailUserIm'>
              <img className='postDetailUserImage' src={mainData?.userImage} alt="user" />
              <h4 style={{paddingLeft: '20px'}}>{mainData?.userName}</h4>
            </div>
            <div className='postDetailLike'>
              
            <LikeCount idPost={mainData?._id} userId={user?._id} likesArr={mainData?.likes} />
            </div>
        </div>
        <div className='postDetailTitle'>
            <h2>{mainData?.title}</h2>
        </div>
        <div className='postDetailTag'>
            <p style={{color: 'red'}}>#{mainData?.tags}</p>
        </div>
        <div className='postDetaildiscription'>
            {mainData?.discription}
        </div>
    </div>
  </div>
    <div className="maincardright">
      <RightPanel />
    </div>
</div>
    <Footer />
</div>
  )
}

export default PostDetail

