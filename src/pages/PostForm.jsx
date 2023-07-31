import React, { useEffect, useState } from 'react'
import ImageUp from '../components/ImageUp'
import Button from '../components/Button'
import { useCreatePostMutation } from '../store/postSlice'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import './PostForm.css'


const PostForm = () => {
    const navigate = useNavigate()
    const [createPost] = useCreatePostMutation()

    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    //console.log(user)

    const [title,setTitle] = useState('')
    const [discription,setdiscription] = useState('')
    const [tags,setTags] = useState('')
    const [imgUrl,setImgUrl] = useState(null)
    // cover image



    const userId = user._id
    const userName = user.name
    const userImage = user.userImage



    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handlediscriptionChange =(e)=> {
        setdiscription(e.target.value)
    }

    const handletagsChange =(e)=>{
        setTags(e.target.value)
    }

    // useEffect(()=>{
    //     console.log('image uploaded at ',imgUrl)

    // },[imgUrl])


    const handleSubmit = ()=>{
        const postData = {
            title: title,
            cover: imgUrl,
            discription: discription,
            userId: userId,
            userName: userName,
            userImage: userImage,
            tags: tags
        }
        // console.log(postData)
        createPost(postData)
        setTimeout(()=>{
            navigate('/dashboard')
        },4000)

    }

  return (
    <>
    <Header />
        <div className='createPostContainer'>
        <div className='createPostHeading'>
            <h2>Create new Post</h2>
        </div>
        <div className='createPostImageUpload'>
            <ImageUp imgUrl={imgUrl} setImgUrl={setImgUrl} />
        </div>
        <div className='createPostForm'>
            <div className='alpha-item'>
                <label htmlFor='title'>Title</label>
                <input value={title} id='title' type='text' name="title" required onChange={handleTitleChange} />
            </div>
            <div className='alpha-item'>
                <label htmlFor='tags'>Tags</label>
                <input value={tags} id='tags' type='text' name="tags" required onChange={handletagsChange} />
            </div>
            <div className='postCreateDisc alpha-item'>
                <label htmlFor='discription'>Discription</label>
                <input value={discription} id='discription' type='text' name="discription" required onChange={handlediscriptionChange} />
            </div>
            <div style={{textAlign: 'center'}}>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default PostForm


