import React from "react";

const bgStyle = {
  backgroundImage: "url('https://www.transparenttextures.com/patterns/batthern.png')"
}


function Profile(){
  return (
    <div class="fs-2">
    <h1 className="profileHeading">PROFILE</h1>
    <ul className="profileItems profileHeading">
      <p>Learned The Technologies and Frame Works of Web Application Development</p>
      <p>Interested in Coding</p>
      <p>Having knowledge on both Front end and Back end Technologies</p>
    </ul>  
    </div>
  );
}

export default Profile;