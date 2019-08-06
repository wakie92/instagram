import React, {useState, useRef} from 'react';
import classes from './ProfileUpload.module.scss'
import { getItem } from '../../../common/StorageUtils';
import Fetch from '../../../common/Fetch';

const ProfileUpload = () => {

  const [file, setFile] = useState()

  const fileRef = useRef(null);
  const onChange =  () => {
    const file = fileRef.current.files[0];
    console.log(file);
    let reader = new FileReader();
    //왜 밑에코드가 없으면 이미지가 생성이안되는지.
    const url = reader.readAsDataURL(file);
    const api = getItem('RestAPI');
    const userId = JSON.parse(sessionStorage.getItem('userData')).user.pid_user;
    console.log(userId);

    const data = new FormData();
    data.append('file', file)
    data.append('filename', file.name)
    console.log(data);

    reader.onloadend = async (e) => {
      await setFile(e.target.result);
      let imgTarget =reader.result.split(',')[0]
      console.log(reader.result)
      const query = `?uri_user=${imgTarget}&pid_user=${userId}`
      const bodyData = {
        uri_user : data,
        pid_user : userId
      }
      // await updatePfImg(reader.result,userId);
      await Fetch(api.user_update_userimg,query,bodyData)
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