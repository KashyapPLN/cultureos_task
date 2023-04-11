import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Signup() {
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');
    const [rPwd,setRPwd]=useState('');
    
function createAcc(){
    let obj={}
    if(rPwd===pwd){
obj={
    user:user,
    email:email,
    pwd:pwd
}
fetch("https://cultureostask-c8reolg95-kashyappln.vercel.app/user/cultureos/signup",{
      method : 'POST',
      body :JSON.stringify(obj),
      headers:{ 'Content-Type': 'application/json',
                'Accept' : 'application/json' }
    }).then((data)=>console.log(data))
console.log(obj);
    }

}
  return (
    <div className='signup'>
        <input type='text'placeholder='username'onChange={(e)=>setUser(e.target.value)}></input>
        <input type='email'placeholder='email id'onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password'placeholder='password'onChange={(e)=>setPwd(e.target.value)}></input>
        <input type='password'placeholder='re-enter password'onChange={(e)=>setRPwd(e.target.value)}></input>
        <Button onClick={createAcc}>sign up</Button>
    </div>
  )
}
