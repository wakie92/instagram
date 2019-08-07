import React , { useEffect, useState , useCallback} from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import Cookies from 'universal-cookie';
import App from './components/App';
import RestAPI from './common/RestAPI';
import { Home, Login } from "pages";
import configure from 'store/configureStore';
function Root() {
  const cookies = new Cookies();
  const [isLogged, setIsLogged] = useState(null)

  const checkLogged = useCallback(() => {
    if(cookies.get('userData')) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      return <Route exact path = '/login' component = {Login}/>
    }
  },[cookies,isLogged])
  
  
  const getRestAPI = async () => {
    const res = await RestAPI();
    console.log('res', res);
    if (!res) return null;
  }
  const store = configure();

  useEffect(() => {
    checkLogged();
  },[checkLogged])

  useEffect(() => { 
    getRestAPI();
  })
  
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
