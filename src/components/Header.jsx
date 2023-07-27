import { useNavigate } from 'react-router-dom'

import Button from './Button'
import './Header.css'
import { useState } from 'react'

const Header = ({setContent,data}) => {

  

  const navigate = useNavigate()
  const user = localStorage.getItem('user')
  const [text,setText] = useState('')

  const handleLogin = ()=>{
    navigate('/login')
  }
  const handleSignup = ()=>{
    navigate('/signup')
  }

  const handleClick =() =>{
    navigate('/')
  }
  const disp =   <div className='headeruseraccountcontainer'>
                      {/* Login */}
                      <p style={{paddingTop: '2px',cursor: 'pointer'}} onClick={handleLogin}>Log in</p>
                      {/* Create Account */}
                      <Button onClick={handleSignup}>Create Account</Button>
                  </div>
    

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    navigate('../')
  }

  const handleChange = (e)=>{
    setText(e.target.value)
    //console.log(e.target.value.length)
    if(data){
      const nwData = data.filter((item)=> item.title.toLowerCase().includes(text.toLowerCase()))
      console.log(nwData)
      if(e.target.value.length === 0){
        console.log('ll')
        setContent(data)
      } else {
        setContent(nwData)
      }
    }
  }

  const ndisp = <div className='headeruseraccountcontainer'>
                    <Button onClick={handleLogout}>logout</Button>
  </div>

  return (
    <div className='headercontainer'>
        <div className='headersearchcontainer'>
            {/* Heading */}
            <h3 className='mouseoverCalss' onClick={handleClick}>Roadeo</h3>
            {/* Search */}
            <input type='text' placeholder='Search..' value={text} onChange={handleChange} />
        </div>

        {user ? ndisp : disp}

    </div>
  )
}

export default Header