import React , { useEffect, useState } from 'react';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom'
import { storageAvailable, getItem } from './common/StorageUtils';
import Fetch from './common/Fetch';
import RestAPI from './common/RestAPI';
import FireAuthUser from "./api/FireAuthUser";
import {
  PROJECT_NAME,
  SERVER_URL
} from "./common/Constants";
import { Route } from "react-router-dom";
import { Home } from "pages";
function Root() {
  const [isLoaded, setIsLoaded]  = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // getPost();
    getRestAPI();
  })

  useEffect(() => {
    const isLogged = sessionStorage.getItem('userData');
    setIsLoaded(isLogged);
    if(isLogged) {
      return <Route exact path = '/main' component = {Home}/>;
    }
  },[isLogged]);
  
  // const getPost = async () => {
  //   storageAvailable();
  //   const api = getItem('RestAPI');
  //   // query: seq(페이지번호), interval(갯수), pid_target(대상유저번호)
  //   const query = '?seq=0&interval=1&pid_target=145';
  //   console.log('api', api);
  //   const res = await Fetch(api.post_get_seq_public_user, query);

  //   console.log('145의 포스트 데이터', res);
  // }

  const getRestAPI = async () => {
    const res = await RestAPI();
    console.log('res', res);
    if (!res) return null;

    setIsLoaded(false);
  }
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}

export default Root;
