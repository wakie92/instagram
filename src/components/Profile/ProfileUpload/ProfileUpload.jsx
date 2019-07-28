import React, {useState, useRef} from 'react';
import classes from './ProfileUpload.module.scss'

const ProfileUpload = () => {

  const [file, setFile] = useState()

  const fileRef = useRef(null);
  const onChange = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    //왜 밑에코드가 없으면 이미지가 생성이안되는지.
    const url = reader.readAsDataURL(file);
    console.log(url)
    reader.onloadend = (e) => {
      setFile(reader.result)
    }
  }
  return (
     <div className = {classes.ProfileUpload}>
       <div className = {classes.ProfileImgBox}>
        { 
          file 
          ? <img alt = "profile"  src = {file}/>
          : null 
        }
       </div>
       <label for = "imageUpload">
        {
          file 
          ? "Chagne Profile" 
          : "+ Upload Profile"
        }
        </label>
       <input 
        ref = {fileRef} 
        type= "file" 
        id = "imageUpload" 
        onChange = {onChange}
        name = "user[image]"
        />
     </div> 
  )
}
export default ProfileUpload;