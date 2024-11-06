//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Contact from './components/contact';
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/footer";
import Accordion from "./components/accordion";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
    <AnimatedCursor 
      color="100, 255, 255"/>
     <Navbar />
     <Contact />
     <Accordion />
     <Carousel />
     <Footer />
    </>
  );
}

export default App;
