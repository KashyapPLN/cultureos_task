
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Login({setUId}) {
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
   function userLogin(){
    let obj={
user:user,
pwd:pwd
    }
    fetch("https://cultureostask-c8reolg95-kashyappln.vercel.app/user/cultureos/login",{
        method : 'POST',
        body :JSON.stringify(obj),
        headers:{ 'Content-Type': 'application/json',
                  'Accept' : 'application/json' }
      }).then((data)=>performLogin(data))
      console.log('obj',obj)
   }
   function performLogin(data){
    if(data.status===200){
data.json().then((val)=>{console.log(val.token);
    document.cookie = "token="+val.token+";path=/";

    
setUId(val.user);
alert(val.message); })
    }
    else{
        data.json().then((val)=>{alert(val.message)});
    }
   }
  return (
    <div className='login'>
        <input type='text'placeholder='username'onChange={(e)=>setUser(e.target.value)}></input>
        <input type='password'placeholder='password'onChange={(e)=>setPwd(e.target.value)}></input>
        <Button onClick={userLogin}>login</Button>
    </div>
  )
}
