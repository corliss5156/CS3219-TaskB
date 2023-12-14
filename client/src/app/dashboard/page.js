'use client'
import { useState } from "react"
import Upload from "./components/Upload"
import UploadArea from "./components/UploadArea"
import AttachedFilesTable from "./AttachedFilesTable"

export default function Page() {
    const [upload, setUpload] = useState(false)
    const handleSetUpload = () => {
        setUpload(!upload)
    }
    return (
        <div className = "p-16 bg-white"> 
            <Upload /> 
            <hr className="my-8"/>
            <UploadArea handleSetUpload = {handleSetUpload}/> 
            <AttachedFilesTable upload = {upload} />
        </div>   
    )
     
  }