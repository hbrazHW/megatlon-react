
import React, {useState, useEffect} from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portada from "./components/portada/Portada";
import MyCarousel from "./components/Carousel/MyCarousel";
import Info from "./components/info/Info";
import Footer from "./components/Footer/Footer";

function App() {
  // scroll de la pagina
 const [scrollHeight, setScrollHeight] = useState(0);
 const handleScroll = () =>{
   const position = window.pageYOffset;
   setScrollHeight(position);
 };

 useEffect(() => {
   window.addEventListener('scroll', handleScroll)
 }, [scrollHeight]);


  return (
    <div className="App">
     <Portada />
     <Navbar isScrolling={scrollHeight} />
     <About />
    <MyCarousel />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
