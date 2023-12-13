'use client'
import SelectedFile from "./SelectedFile";
import UploadButton from "./UploadButton";
import { useState } from "react";
export default function UploadArea() {
    const [selectedFile, setSelectedFile] = useState(null)
     
    const handleSetFile = (f) => {
        setSelectedFile(f)
    }
    return(
        <div> 
            <UploadButton handleSetFile={handleSetFile}/> 
            {selectedFile? <SelectedFile selectedFile={selectedFile}/> : null }
        </div> 
    )
}