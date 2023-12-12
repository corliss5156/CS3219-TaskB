'use client'

export default function AttachedFilesTable () {
    const data = 
        [{Key:"material_oh_reskill.azw",LastModified:"2023-12-05T08:02:50.000Z",Size:1},
                {Key:"uploads/Chapter 319.docx",LastModified:"2023-11-30T06:55:42.000Z",Size:22209}]
    

    
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
                            <td className="text-slate-400 p-3.5">{row.Size}</td>
                            <td>Delete</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}