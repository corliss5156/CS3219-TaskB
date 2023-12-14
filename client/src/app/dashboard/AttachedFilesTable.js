'use client'
import Delete from "./components/Delete"
import { useEffect, useState } from "react"

   
export default  function  AttachedFilesTable (props) {
    const [data, setData] = useState([]) 
    const [deleteData, setDeleteData] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/list", { cache: 'no-store' });
            if (res.ok) {
                const resJson = await res.json();
                setData(resJson);
            } else{
                console.log(first)
            }
            
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors as needed, e.g., set an error state
          }
        };
    
        fetchData();
      }, [deleteData, props.upload]);
    const handleSetDeleteData = () => {
        setDeleteData(!deleteData)
    }
    return (
        <div className='border border-slate-400 rounded-lg my-8'>

        
        <table className='table-auto border-collapse w-full'> 
            <thead > 
                <tr className='bg-indigo'>
                    <th className='text-left text-slate-400 p-3.5'>Key</th>
                    <th className='text-left text-slate-400 p-3.5'>Last Modified</th>
                    <th className='text-left text-slate-400 p-3.5'>Size</th>
                    <th></th>
                </tr>  
                
            </thead>
            <tbody> 
                {data.map((row)=>{
                    return(
                        <tr key = {row.Key}>
                            <td className='text-black p-3.5'>{row.Key}</td>
                            <td className="text-slate-400 p-3.5">{row.LastModified}</td>
                            <td className="text-slate-400 p-3.5">{row.Size} kB</td>
                            <td className='w-28'><Delete objectKey={row.Key} handleSetDeleteData = {handleSetDeleteData}/> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}