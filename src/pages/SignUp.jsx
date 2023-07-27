import React, { useState } from 'react'
// import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../store/userSlice'
// import { toast } from 'react-toastify'
import './SignUp.css'




const SignUp = () => {


    const [ signup ] =useSignupMutation()

    const [text,setText] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const { user,isSuccess,isError,message } = useSelector((state)=> state.user)

    const createUser = async(nwUser) => {
        const result = await signup(nwUser)
        if(result?.data.name){
            localStorage.setItem('user',JSON.stringify(result.data))
            navigate('/dashboard')
        }

        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {
            name: text.name,
            email: text.email,
            password: text.password
        }

    //    console.log(userData)
    createUser(userData)
    }

    const handleChange = (e)=>{
        setText((prevState)=>({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

    // useEffect(()=>{
    //     if(isError){
    //         toast.error(message)
    //     }

    //     if(user || isSuccess){
    //         navigate('/container/shop')
    //     }

    //     dispatch(reset())
    // },[user,isError,isSuccess,navigate,dispatch,message])

  return (
    <div className='app'>
            <div className='login-form'>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor='name'>Name </label>
                            <input value={text.name} id='name' type="text" minLength='3' name="name" required onChange={handleChange} />
                        </div>
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
                </div>
            </div>
    </div>
  )
}

export default SignUp