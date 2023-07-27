
import { useEffect, useState } from "react";
import { BsBookmarkStar,BsBookmarkStarFill } from "react-icons/bs";
import { useBookmarkMutation } from "../store/userSlice";
import { useNavigate } from "react-router-dom";



const BookmarkIcon = ({id,title}) => {

    const navigate = useNavigate()
    const [bookmark] = useBookmarkMutation()
    const [book,setBook] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log('from bookmark icon',user?.bookmark)
    // const usebbb = user.bookmark.find(item => item.postId === id)
    // console.log(usebbb)
    useEffect(()=>{
       if(id && user?.bookmark.find(item => item.postId === id)){
        setBook(true)
       }
    },[])

    const handleBookmark = async ()=>{
        if(user){
            const sendData = {
                userId: user._id,
                postId: id,
                postTitle: title
            }
            const book = await bookmark(sendData)
            console.log(user.bookmark)
            if(book?.data.name){
                // console.log('showing recived book',book?.data.bookmark)
                user.bookmark = book.data.bookmark
                localStorage.setItem('user',JSON.stringify(user))
                //console.log(user.bookmark)
            }

            setBook(true)
        } else {
            navigate('/login')
        }
    }


  return (
    <div>
        {book ? <BsBookmarkStarFill /> : <BsBookmarkStar onClick={handleBookmark} />}
    </div>
  )
}

export default BookmarkIcon