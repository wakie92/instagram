import React, {useState, useRef, useCallback} from 'react'
import classes from './UploadImg.module.scss'
import { Xmark } from 'libs/images';
const UploadImg  = () => {

  const [files, setFiles] = useState()

  const fileRef = useRef(null);
  const onChange = useCallback(() => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    //왜 밑에코드가 없으면 이미지가 생성이안되는지.
    const url = reader.readAsDataURL(file);
    console.log(url)
    reader.onloadend = (e) => {
      setFiles(reader.result)
    }
  },[])
  const removeImg = useCallback(() => {
    setFiles(null);
  },[])
  return (
     <div className = {classes.ImageUpload}>
       <label for = "imageUpload">
        {
          files 
          ? <div>
              <p>Chagne Image</p>
            </div>
          : <div>
              <p>+ Add Image</p>
            </div>
        }
        </label>
       <input 
        ref = {fileRef} 
        type= "file" 
        id = "imageUpload" 
        onChange = {onChange}
        name = "user[image]"
        multiple = {true}
        />
        <div className = {classes.ImgBox}>
        { 
          files 
          ? <>
              <img alt = "profile"  src = {files}/>
              <img onClick = {removeImg} className = {classes.Xmark} alt = "xmark " src = {Xmark}/>
            </>
          : null 
        }
       </div>
     </div> 
  )
}

export default UploadImg;
