import { createStore,  } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const configure = () =>
  createStore(
    rootReducer,
    composeWithDevTools()
  );
  
export default configure;