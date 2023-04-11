import React, {useState,useEffect} from 'react'
import { Document,Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
function PdfViewer({userName,userFiles}) {

 

  
useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  }, [])

 
  return (
   
<div>

<div>
      <iframe style={{width:'1500px'}}src={userFiles} width="100%" height="800px"></iframe>
    </div>
    </div>

  );
}

export default PdfViewer;