import React , { useEffect, useState } from 'react';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom'
import RestAPI from './common/RestAPI';
import { Route } from "react-router-dom";
import { Home } from "pages";
function Root() {
  const [isLoaded, setIsLoaded]  = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    getRestAPI();
  },[])

  useEffect(() => {
    const isLogged = sessionStorage.getItem('userData');
    setIsLoaded(isLogged);
    if(isLogged) {
      return <Route exact path = '/main' component = {Home}/>;
    }
  },[isLogged]);

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
