//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Contact from './components/contact';
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/footer";
import Accordion from "./components/accordion";

function App() {
  return (
    <>
    <AnimatedCursor 
      color="100, 255, 255"/>
     <Navbar />
     <Contact />
     <Accordion />
     <Footer />
    </>
  );
}

export default App;
