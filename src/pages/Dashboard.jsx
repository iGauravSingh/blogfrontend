import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import './Dashboard.css'
import Button from '../components/Button'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'

import { useUserPostsQuery } from '../store/postSlice'
import UserPostList from '../components/UserPostList'




const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const {data,isLoading,isSuccess,isError,error} = useUserPostsQuery(user?._id)
  
  const handleCreate =()=> {
    navigate('/postform')
  }

  const disp =     <div>
  <Header />
  <div className="maincardcontainer">
    <div className="maincardleft">
      <LeftPanel />
    </div>
    <div className="maincardcenter">
    <div>
        <div className='dashboardContainer'>
          <div className='dashboardHeader'>
            <div className='dashboardHeaderUser'>
            <img src={user?.userImage} alt='profile' />
            {user ? <h3>Welcome {user?.name}</h3> : <h4>please <Link to='../login'>login</Link></h4>}
            </div>
            <div style={{paddingRight: '20px'}}>
            <Button onClick={handleCreate}>Create New</Button>
            </div>
          </div>
          <div className='dashboardContent'>
            {/* content */}
            <h2 style={{textAlign: 'center',padding: '20px 0 10px 0'}}>Your Posts</h2>
            {data?.map(item=> <UserPostList key={item._id} title={item.title} id={item._id} />)}
          </div>
        </div>
  
        
      </div>
    </div>
      <div className="maincardright">
        <RightPanel />
      </div>
  </div>
  </div>

  return (
    <>
      {user ? disp : <h3>please <Link to='/login'>login</Link></h3>}
      
    </>
  )
}

export default Dashboard

