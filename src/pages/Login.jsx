import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../store/userSlice'
// import {login,reset} from '../features/auth/authSlice'
// import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const { user,isError,isSuccess,message } = useSelector((state)=> state.user)

    const [ login ] = useLoginMutation()

    const [text,setText] = useState({
        email: '',
        password: ''
    })

    const logUser = async(nwUser) => {
      const result = await login(nwUser)
      if(result?.data.name){
          localStorage.setItem('user',JSON.stringify(result.data))
          navigate('/dashboard')
      }

      
  }


    const handleChange = (e)=>{
        setText((prevstate)=> ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const userdata = {
            email: text.email,
            password: text.password
        }
        // dispatch(login(userdata))
        logUser(userdata)
    }



    // useEffect(()=>{
    //     if(isError){
    //         toast.error(message)
    //     }

    //     if(user || isSuccess){
    //         navigate('/container/shop')
    //     }

    //     dispatch(reset())
    // },[user,isError,isSuccess,navigate,message,dispatch])

     const user = localStorage.getItem('user')
     useEffect(()=>{
      if(user){
        navigate('../dashboard')
      }
     })

    return (
        <div className='app'>
            <div className='login-form'>
            <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor='email'>Email </label>
            <input value={text.email} id='email' type="email" name="email" required onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password </label>
            <input value={text.password} id='password' type="password" name="password" required onChange={handleChange} />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <p>new here ? <Link to='../signup'>register</Link></p>
      </div>
            </div>
        </div>
      )
}

export default Login