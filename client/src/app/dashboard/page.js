import Upload from "./components/Upload"
import UploadButton from "./components/UploadButton"
import AttachedFilesTable from "./AttachedFilesTable"
export default function Page() {
    return (
        <div className = "p-16 bg-white"> 
            <Upload /> 
            <hr className="my-8"/>
            <UploadButton />
            <AttachedFilesTable />
        </div>   
    )
     
  }