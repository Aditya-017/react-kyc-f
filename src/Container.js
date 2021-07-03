import React from 'react'
import { useState } from 'react';
import './App.css';
import kyc from './kyc.png'
import tick from './tick.svg'
function Container({children}) {
const [file, setFile] = useState(null)

   function changeHandler(e){
        const filesel=e.target.files[0];
        setFile(filesel);
    }
    function submitHandler(e){
        e.preventDefault()

        return(<h1>Submitted</h1>)
    }
    function fileUploadHandler(e){
        
    }
    
    return (
        <div className="container">
            <div className="topContainer">
                {/* {tick} */}
                <img id="tick-icon" src={tick} alt="Tick"/>
                <img className="kycimg" src={kyc} alt="Logo"/>
            
                 <h1>
                     <div>
                     KYC
                     </div>
                     <div>
                     Document
                     </div>
                     <div>
                     Upload
                     </div>
                     </h1>
                 <div className="backdrop"/>
                 
            </div>
            <div className="fileuploadcontainer">
               
                <form /* onSubmit={submitHandler} */ className="submitform">
                <input id="input" style={{display:"none"}} type="file" name="file" onChange={changeHandler} />
                <label htmlFor="input" className="submit-btn">Pick File</label>
                <button type="submit" className="submit-btn" /* onClick={fileUploadHandler} */>Sumbit</button>
                </form>
            </div>
            
            

           
        </div>
    )
}

export default Container
