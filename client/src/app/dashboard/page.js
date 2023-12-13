import Upload from "./components/Upload"
import UploadArea from "./components/UploadArea"
import AttachedFilesTable from "./AttachedFilesTable"

export default function Page() {
    return (
        <div className = "p-16 bg-white"> 
            <Upload /> 
            <hr className="my-8"/>
            <UploadArea /> 
            <AttachedFilesTable />
        </div>   
    )
     
  }