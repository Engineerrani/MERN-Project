import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
const[name, setName] = useState("");
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const navigate = useNavigate();

    useEffect = (() => {
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    }, [])

const collectdata = async () => {
    console.warn(name,email,password)
    let result =  await fetch('http://localhost:5000/register', {
    method: 'post',
    body:JSON.stringify({name, email, password}),
    headers: {
    'Content-Type':'application/json'
}
    })
   result = await result.json();
    console.warn(result)
    //store data in local storage
    localStorage.setItem('user', JSON.stringify(result.result))
    localStorage.setItem('token', JSON.stringify(result.auth))

    //after signup... page navigate to home(where we want give the path)
     navigate('/')
    
}

    return (
        <div className='register'>
        <h1>Register</h1>
        <input className='inputBox' 
        value={name} type='text' 
        onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />

        <input className='inputBox' 
        value={email} type='text'
        onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />

        <input className='inputBox' 
        value={password} type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
        <button onClick={collectdata} className='appButton' type='button'>Sign Up</button>



        </div>
    )
}
export default SignUp;