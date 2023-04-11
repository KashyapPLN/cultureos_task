import React from 'react'
import { Container } from 'react-bootstrap'

export default function UserFiles({userName,userFiles}) {
    
    
   
      console.log("kashyap files are",userFiles) 
    
       
    
  return (
    <div >
      <Container style={{display:'flex'}}>
     {userFiles.map((data)=><div className='userPdfs'>{data.userName}</div>)} 
      </Container>
    </div>
  )
}
