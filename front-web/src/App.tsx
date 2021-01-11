import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';

const App: React.FC = () => (
  <>
    <Routes />
    <ToastContainer />
  </>
);

export default App;
