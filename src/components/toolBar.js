import React from 'react'
import { Button } from 'react-bootstrap'
import {AiOutlineHome,AiOutlineFileText,AiOutlineHistory,AiOutlineFileDone} from 'react-icons/ai'
import {BsFileEarmarkBarGraph} from 'react-icons/bs'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'

export default function ToolBar({setSUp,setLogin,logout,userName,setPapersDisp,setUserFiles,userFiles}) {
 function handleSignUp(){
  setSUp(true);
  setLogin(false);
 }
 function handleLogin(){
  setLogin(true)
  setSUp(false);
}
function myPapers(){
  setPapersDisp(true)
  fetch(`https://cultureostask-c8reolg95-kashyappln.vercel.app/user/cultureos/files/${userName}`)
  .then((data)=>data.json())
  .then((d)=>{const pdfData=d[0].pdf;
    // const decodedPdfData = atob(userFiles.slice(8, -2));
    // console.log('decoded data is',decodedPdfData);
    // setUserFiles(decodedPdfData);
    const binaryData = atob(pdfData);
    console.log("gfhbyjnuykuykitgh",pdfData)
    //const blob = new Blob([binaryData], { type: 'application/pdf' });

    const byteArray = new Uint8Array(binaryData.length);
for (let i = 0; i < binaryData.length; i++) {
  byteArray[i] = binaryData.charCodeAt(i);
}
  const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    setUserFiles(url);
  });

  
}


function home(){
  setPapersDisp(false);
  
}
  return (
    <div >
      <div>
      <div style={{height:'60px',backgroundColor:'#c4e6e6',width:'300px'}}></div>
      <div className='custom_toolbar'>
        <ul className='list'>
            <li onClick={home} style={{paddingTop:'10px'}}><span style={{marginRight:'10px',display:'inline-flex'}}><AiOutlineHome/></span>Home <p><hr/></p></li>
            
            <li onClick={myPapers}><span style={{marginRight:'10px',display:'inline-flex'}}><AiOutlineFileText/></span>My Papers</li>
            <li><span style={{marginRight:'10px',display:'inline-flex'}}><AiOutlineFileDone/></span>Evaluation</li>
            <li><span style={{marginRight:'10px',display:'inline-flex'}}><HiOutlineNewspaper/></span>Re-evalation</li>
            <li><span style={{marginRight:'10px',display:'inline-flex'}}><BsFileEarmarkBarGraph/></span>Reports</li>
            <li><span style={{marginRight:'10px',display:'inline-flex'}}><AiOutlineHistory/></span>History</li>
        </ul>
        {userName==='anonymous'?  <div style={{marginBottom:'150px',display:'flex',justifyContent:'center'}}>
        <Button style={{fontWeight:'bold'}} onClick={handleSignUp} variant='link'>Sign Up</Button>
        <Button style={{fontWeight:'bold'}} onClick={handleLogin} variant='link'>login</Button>
        
        </div>:<div style={{marginBottom:'150px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <p style={{fontWeight:'bold'}}>{userName}</p>
        <Button style={{fontWeight:'bold'}} onClick={logout} variant='text'><FiLogOut/></Button></div>}
        </div>
       </div>
      
       
    </div>
  )
}
