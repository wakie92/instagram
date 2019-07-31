import React, {useState, useRef} from 'react';
import classes from './ProfileUpload.module.scss'
import { getItem } from '../../../common/StorageUtils';
import Fetch from '../../../common/Fetch';
import axios from '../../../axios-base';
const ProfileUpload = () => {

  const [file, setFile] = useState()

  const fileRef = useRef(null);
  const onChange =  () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    //왜 밑에코드가 없으면 이미지가 생성이안되는지.
    const url = reader.readAsDataURL(file);
    const api = getItem('RestAPI');
    const userId = JSON.parse(sessionStorage.getItem('userData')).user.pid_user;
    console.log(userId);
    reader.onloadend = async (e) => {
      setFile(reader.result);
      const query = `?uri_user=${file}&pid_user=${userId}`
      const bodyData = {
        uri_user : file,
        pid_user : userId
      }
      await axios.put(`/user_update_userimg/?uri_user=${reader.result}&pid_user=${userId}`, bodyData )
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
       <label htmlFor = "imageUpload">
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