import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter instead of just Router

import Home from './components/mainPages/Home';

import HuntPackage from './components/packagePages/HuntPackage';
import PhotoPackage from './components/packagePages/PhotoPackage';
import ActivitiesPage from './components/packagePages/ActivitiesPage';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/hunt" element={<HuntPackage />} />
          <Route path="/photographic" element={<PhotoPackage />} />
          <Route path="/other" element={<ActivitiesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
