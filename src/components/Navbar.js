import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
  return(
    <div className="header fontStyle">
    <h1 class="fs-1"> KARTHICK</h1>
    <p style={{position: "absolute",margin: "12px 200px",fontSize:"20px"}}>Full Stack Developer</p>
    <div class="d-flex bd-highlight flex-row-reverse fs-5">
    <div>
      
    </div>
    <Link to='CoCurricular' style={{textDecoration:"none"}}>
    <div className="linkStyle">Co-Curricular Activities</div>
    </Link>
    <Link to='/Education' style={{textDecoration:"none"}}>
    <div className="linkStyle">Education</div>
    </Link>
    <Link to='/' style={{textDecoration:"none"}}>
    <div className="linkStyle">Home</div>
    </Link>




</div>
    </div>
    
  );
}

export default Navbar;