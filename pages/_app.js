
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Index from './index';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
function MyApp() {

  return (
    <Provider store={store}>
    <Index />
    </Provider>
  );

  }
export default MyApp;
