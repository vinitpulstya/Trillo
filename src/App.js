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
import { AppStateProvider } from './services/AppstateContext';
import Statusbar from './components/Statusbar/Statusbar';
import { AuthProvider, RequireAuth } from './services/AuthContext';
import { Hotels } from './pages/Hotels/Hotels';

function App() {

  return (
    <div className='container'>
      <AuthProvider>
        <AppStateProvider>
          <Modal />
          <Statusbar />
          <Router>
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/' element={
                <RequireAuth>
                  <Hotel />
                </RequireAuth>
              } />
              <Route exact path='/hotel' element={
                <RequireAuth>
                  <Hotel />
                </RequireAuth>
              } />
              <Route exact path='/hotels' element={
                <RequireAuth>
                  <Hotels />
                </RequireAuth>
              } />
              <Route exact path='/flight' element={
                <RequireAuth>
                  <Hotel />
                </RequireAuth>
              } />
              <Route exact path='/carrental' element={
                <RequireAuth>
                  <Hotel />
                </RequireAuth>
              } />
              <Route exact path='/tours' element={
                <RequireAuth>
                  <Hotel />
                </RequireAuth>
              } />
            </Routes>
          </Router>
        </AppStateProvider>
      </AuthProvider>
    </div>

  );
}

export default App;
