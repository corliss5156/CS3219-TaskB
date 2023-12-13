'use client'
import { useState } from "react"
import { MdOutlineDelete } from "react-icons/md";

export default function Delete(props){
    const [deleteConfirmation, setDeleteConfirmation]=useState(true)
    const timeoutDeleteConfirmation = () => {
        setTimeout(()=>{
            setDeleteConfirmation(true)
        }, 3000)
    }
    const deleteFile = async () => {
     
        try {
            const res = await fetch("http://localhost:8000/api" +`/delete/${props.objectKey}`, {
            method: "DELETE", 
            })
            if (res.ok) {
                const deletedKey = await res.json()
                console.log(`Object with object key ${deletedKey} deleted`)
                //Set state of parent to remove row from uI 
            } else {
                const err = await res.json()
                console.log(`Error: ${err.error}`)
            }
        }catch {
            console.log(`Error occured while deleting ${props.objectKey}`)
        }
        

    }
    return(
        <div> 
            <div>
                {deleteConfirmation ? <div className='flex' onClick={()=>{setDeleteConfirmation(!deleteConfirmation)
                timeoutDeleteConfirmation()}}>
                    <MdOutlineDelete style={{ color: 'red', fontSize: '24px', display: 'inline'}}/>
                    <p className = 'text-red-500'>Delete</p>
                </div>
                : 
                <div >

              
                    <button onClick={deleteFile}className = 'primary-button mx-0.5'> Yes</button> 
                    <button onClick={()=>setDeleteConfirmation(!deleteConfirmation)} className = 'secondary-button mx-0.5'>No</button>

                </div>
                
                }
                
            </div>
        </div>
    )
}