export default function SelectedFile(props){
    return(
        <div className='border-dashed rounded-lg border-gray-400'>
            <h3 className="text-xl font-bold">Selected File: </h3>
            <div className="text-sm text-slate-400 rounded-md border border-slate-400 rounded-lg my-1 py-1 px-2.5">{props.selectedFile.name}</div>
           
        </div> 
            
    ) 
} 