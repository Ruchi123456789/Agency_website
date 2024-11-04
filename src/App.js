import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Contact from './components/contact';
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <AnimatedCursor 
      color="100, 255, 255"/>
     <Navbar />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
