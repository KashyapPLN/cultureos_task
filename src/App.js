
import { useState } from 'react';
import './App.css';
import ToolBar from './components/toolBar';
import Signup from './components/signup';
import Login from './components/login';
import AddFile from './components/AddFile';
import UserFiles from './components/UserFiles';
import PdfViewer from './components/PdfViewer';





function App() {
  const [sUp,setSUp]=useState(false);
  const [login,setLogin]=useState(false);
  const [userName,setUserName]=useState('anonymous');
  const [uId,setUId]=useState('anonymous');
  const [papersDisp,setPapersDisp]=useState(false);
  const [userFiles,setUserFiles] = useState([]);
  

  function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }
  
  console.log("token value is",getCookie("token"));
   if(getCookie("token")!==undefined){
  fetch(`https://cultureostask-c8reolg95-kashyappln.vercel.app/user/cultureos/validateuser/`+getCookie("token"))
  .then((data)=>data.json())
  .then((val)=>{console.log(val);
    setUserName(val.user.id)});
console.log("uid is",userName);
  
  }
//   window.sessionStorage.setItem("userName",userName);
//   const userName1 = window.sessionStorage.getItem("userName");
 
 console.log("userName is ", userName);

  function logout(){
    setUserName('anonymous');
    document.cookie = "token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload();
  }
  return (
    <div className="App">

 <ToolBar setSUp={setSUp} setLogin={setLogin} userName={userName} logout={logout} setPapersDisp={setPapersDisp} setUserFiles={setUserFiles} userFiles={userFiles}/>
 {sUp===true&&userName==='anonymous' ?<div className='sl'> <Signup/></div>:null}
 {login===true&&userName==='anonymous'?<div className='sl'> <Login setUId={setUId}/></div>:null}
{papersDisp===false ? <AddFile userName={userName}/>:null}
{/* {papersDisp===true? <UserFiles userName={userName} userFiles={userFiles}/>:null} */}
{papersDisp===true? <PdfViewer userName={userName} userFiles={userFiles}/>:null}


    </div>
  );
}

export default App;
