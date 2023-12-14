export default function SelectedFile(props){
    return(
        <div className='border-dashed rounded-lg border-gray-40 my-8'>
            
            <div className="rounded-md border border-slate-400 rounded-lg my-1 py-3 px-5 h-16">
                <p className = "text-sm text-slate-400 ">{props.selectedFile.name}</p> 
                {props.loading ? <div className="w-full bg-blue h-2 rounded-lg my-2 loading"></div> : null } 
            </div>
            
        </div> 
            
    ) 
} 