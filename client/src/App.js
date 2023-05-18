import './App.css';
import About from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation.jsx';
import Sport from './Components/Sport/Sport';

import { Route, Routes } from 'react-router-dom';
import Training from './Components/Training/Training.jsx';
import Team from './Components/Team/Team.jsx';



function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='/' element={<Sport />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Training' element={<Training />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes >

    </div>
  );
}

export default App;
