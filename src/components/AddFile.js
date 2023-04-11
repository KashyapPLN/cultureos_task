import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export default function AddFile({userName}) {
    const [selectedFile, setSelectedFile] = useState(null); 
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
      }
      const formData = new FormData();
    //   let obj={
    //     pdf:selectedFile
    // }
    formData.append('userId', userName);
    formData.append('pdf', selectedFile);
    
   
      const handleFileUpload = () => {
        // Do something with the selected file
        console.log(selectedFile);
// ${userName}
      
        fetch(`https://cultureostask-c8reolg95-kashyappln.vercel.app/user/cultureos/upload`,{
      method : 'POST',
      body: formData
  })
//  .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('file uploaded!');
      // Do something with the response data
    })
      }
  return (
       <div>
        <Card className='addFile'>
      <Card.Img className='crdImg'variant="top" src="https://img.freepik.com/free-icon/pdf_318-187732.jpg?w=2000" />
      <Card.Body>
        
        <Card.Text>
        <input type="file" accept="application/pdf" onChange={handleFileSelect} /> 
        <Button style={{marginTop:'30px',marginBottom:'30px'}} onClick={handleFileUpload}>Upload PDF</Button>
        </Card.Text>
      </Card.Body>
      </Card>
      
      
    </div>
  )
}
