import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import AllHotels from "./pages/allHotels/AllHotels";
import Contact from "./pages/contact/Contact";
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allhotels" element={<AllHotels />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
