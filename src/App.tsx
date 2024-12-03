import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Careers from "./pages/Careers";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/careers" Component={Careers} />
          <Route path="/projects" Component={Projects} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
