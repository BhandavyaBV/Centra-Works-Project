import React, {useState} from "react";

import { readFile } from "../Services/fileReadService";

function AttachmentsComponent({registerSubmit, clearForm}){

    const [file, setFile] = useState(null)

    
        async function submitForm(){ 
            if(file)
                 return await readFile(file)
            else 
                return false
        }
    
        function updateFile(e){
            let files = e.target.files
            setFile(files[0])
        }

        function clearState(){
            setFile(null)
        }
    
        registerSubmit(submitForm)
        clearForm(clearState)

    return(
        <>
        <div className="card rounded-0">
            <div className="card-header">
                <b>Attachments</b>
            </div>
            <div className="card-body background-color-grey pointer">
            <div onClick={() => document.getElementById('file-input').click()} className="text-center">
                <p>Click here to select file</p>
            </div>
            <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={updateFile}
                multiple
            />
            </div>
        </div>
         <span>{file?.name}</span>
        </>
    )

}

export default AttachmentsComponent