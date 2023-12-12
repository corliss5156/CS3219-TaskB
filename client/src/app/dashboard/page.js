import Upload from "./components/Upload"
import UploadButton from "./components/UploadButton"
export default function Page() {
    return (
        <div className = "p-16 bg-white"> 
            <Upload /> 
            <hr className="my-8"/>
            <UploadButton />
            
        </div>   
    )
     
  }