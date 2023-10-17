import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Home_main  from "./Home_main";
import Aboutsynsara from "./Aboutsynsara";
import Aboutinst from "./Aboutinst";
import Aboutdept from "./Aboutdept";
import Footer from "../../components/Footer/Footer";
import Bgweb from "../../static/bgweb.gif"


const Home = () => {
 

  return(
    <>
     
  
  
    <div>
    
      <Home_main/>
      <Aboutsynsara/>
      <Aboutinst/>
      <Aboutdept/>
      <br/>
      <br />
      <Footer/>
      </div>
      
      

  </>   
  );
}

export default Home;
