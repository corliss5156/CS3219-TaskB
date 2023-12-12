'use client'
import {useRef} from 'react'; 
import { MdOutlineCloudUpload } from "react-icons/md";
import { IconContext } from "react-icons";

export default function UploadButton(){
    const fileRef = useRef(null)

    const handleFileClick = () =>{
        fileRef.current.click()
    }
    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        if (file) {console.log(file)}
    }
    return (
        <div className='p-6 text-center cursor-pointer border-solid border rounded-lg border-gray-400 bg-indigo  lock '> 
            <input type = "file" 
            ref={fileRef}
            className="hidden"
            onChange = {handleFileChange}/>
            <div className = "h-32 block text-center"onClick = {handleFileClick} > 
                    <div className='text-center'>
                        <div className='rounded-full bg-light-blue text-center inline-block p-1.5'>
                        <MdOutlineCloudUpload style={{ color: 'blue', fontSize: '24px', width: '100%' }} />
                        </div>
                    </div>
                    
                    
                <p className='text-slate-400'>Click to upload file</p> 
               
            </div> 
        </div> 
    )
}