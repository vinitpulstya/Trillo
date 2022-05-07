import './App.scss';
import Hotel from './pages/Hotel/Hotel';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Modal from './components/Modal/Modal';
import Signup from './pages/Signup/Signup';
import { ModalProvider } from './services/AppstateContext';
import Statusbar from './components/Statusbar/Statusbar';

function App() {

  return (
    <div className='container'>
    <ModalProvider>
    <Modal />
    <Statusbar />
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Hotel />} />
          <Route exact path='/hotel' element={<Hotel />} />
          <Route exact path='/flight' element={<Hotel />} />
          <Route exact path='/carrental' element={<Hotel />} />
          <Route exact path='/tours' element={<Hotel />} />
        </Routes>
      </Router>
      </ModalProvider>
    </div>

  );
}

export default App;
