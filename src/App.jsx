// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReferPage from './pages/ReferPage';


// more routes can be added 
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReferPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
