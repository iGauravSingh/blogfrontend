
import { Link,useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import Footer from '../components/Footer'


const Bookmark = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    //console.log(user.bookmark)
    if(!user){
        navigate('/login')
    }

    const handleitem =(id)=>{
        navigate(`/post/${id}`)
    }

    const disp = <div>
    <Header />
    <div className="maincardcontainer">
    
      <div className="maincardleft">
        <LeftPanel />
      </div>
      <div className="maincardcenter">
      <h2 style={{padding: '20px 0 15px 0px',borderBottom: '1px solid gray'}}>Bookmarks</h2>
      {user?.bookmark.map(item=> <h3 style={{padding: '10px 0 0 0', cursor: 'pointer'}} key={item._id} onClick={()=>handleitem(item.postId)}>{item.postTitle}</h3>)}
      </div>
        <div className="maincardright">
          <RightPanel />
        </div>
    </div>
    <Footer />
    </div>

  return (
    <>
      {user ? disp : <h3>please <Link to='/login'>login</Link></h3>}
    </>
    
  )
}

export default Bookmark


