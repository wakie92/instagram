import React , { useEffect, useState } from 'react';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import RestAPI from './common/RestAPI';
import { Route } from "react-router-dom";
import { Home } from "pages";
import configure from 'store/configureStore';
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
  const store = configure();
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
