import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
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
      </Routes>
    </Router>
    </>
  );
}

export default App;
