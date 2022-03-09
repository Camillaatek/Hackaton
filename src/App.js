import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Contact from "./pages/contact/Contact";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import AuthContext, { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
