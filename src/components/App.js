import React from "react";
import Navbar from "./Navbar";
import Profile from "./profile";
import Footer from "./Footer";
import Education from "./Education";
import CoCurricullar from "./CoCurricular";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return (
  <div>
    <Router>
     <Navbar />
     <Route path="/" exact component={Profile} /> 
     <Route path="/Education" exact component={Education} /> 
     <Route path="/CoCurricular" exact component={CoCurricullar} /> 
      <Footer /> 
    </Router>
  
  </div> 
  );
}

export default App;