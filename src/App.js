import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Second from "./components/Second"
import Third from "./components/Third"
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth"
import Sixth from "./components/Sixth"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <div className="HeaderImage">
  
    <Navbar />
    <Main />
    
    </div>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    <Footer/>
    
    </div>
  );
}

export default App;
