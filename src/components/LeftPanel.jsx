
import { useNavigate } from 'react-router-dom'
import './LeftPanel.css'

const LeftPanel = () => {

  const navigate = useNavigate()

  const handleDashboard = ()=>{
    navigate('/dashboard')
  }
  const handleHome = ()=>{
    navigate('/')
  }

  const handleBookmark = ()=>{
    navigate('/bookmark')
  }

  const handleFaq =()=>{
    navigate('/faq')
  }

  return (
    <div className='leftpanelcontainer'>
        <div>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}} onClick={handleHome}>Home</p>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}} onClick={handleDashboard}>Dashboard</p>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}} onClick={handleBookmark}>Bookmarks</p>
            {/* <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}}>Tags</p> */}
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}} onClick={handleFaq}>FAQ</p>
        </div>

        <div>
            <h3 style={{padding: '8px 0 6px 0'}}>Popular Tags</h3>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}}>#Rome</p>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}}>#Paris</p>
            <p className='mouseoverCalss' style={{padding: '2px 0 5px 0'}}>#India</p>
        </div>
    </div>
  )
}

export default LeftPanel