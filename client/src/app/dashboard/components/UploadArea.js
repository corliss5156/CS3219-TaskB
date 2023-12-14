'use client'
import SelectedFile from "./SelectedFile";
import UploadButton from "./UploadButton";
import { useState } from "react";
export default function UploadArea(props) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSetFile = async (f) => {
        
        setSelectedFile(f)
        try {
            setLoading(true)
            const body = new FormData()
            body.append('file', f)
            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST+`/upload`, {
                method: 'POST', 
                body:  body
            })
            if (res.ok) {
                props.handleSetUpload()
                setLoading(false)
                setSelectedFile(null)
                
                const objectKey = await res.json()
                console.log(`Uploaded ${objectKey}`)
                
            } else {
                const err = await res.json() 
                console.log(`${err.error}`)
            }   
        } catch {
            console.log(`Error adding ${f.name}.`)
        }
        
    }
    return(
        <div> 
            <UploadButton handleSetFile={handleSetFile}/> 
            {selectedFile? <SelectedFile selectedFile={selectedFile} loading = {loading}/> : null }
        </div> 
    )
}