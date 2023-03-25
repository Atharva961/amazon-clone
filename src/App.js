import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './CheckOut.js';

function HomeWithHeader() {
  return (
    <>
      <Home />
    </>
  );
}

function CheckOutComponent() {
  return (
    <>
      <CheckOut />
    </>
  );
}

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<CheckOutComponent />} />
          <Route path="/" element={<HomeWithHeader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
