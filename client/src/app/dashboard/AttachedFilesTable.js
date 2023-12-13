import Delete from "./components/Delete"

export async function getData() {
  
    const res = await fetch( "http://localhost:8000/api/list")
    const data = await res.json()
    return data
  
    
  }
   
export default async function  AttachedFilesTable () {
    const data = await getData()
    
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
                            <td className='w-28'><Delete objectKey={row.Key}/> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}