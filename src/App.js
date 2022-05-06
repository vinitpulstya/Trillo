import './App.scss';
import Hotel from './pages/Hotel/Hotel';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Hotel />} />
          <Route exact path='/hotel' element={<Hotel />} />
          <Route exact path='/flight' element={<Hotel />} />
          <Route exact path='/carrental' element={<Hotel />} />
          <Route exact path='/tours' element={<Hotel />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
