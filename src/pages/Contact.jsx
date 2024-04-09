import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Contact = () => {
  const navigate= useNavigate()
  
 

  return (
    <div className="container w-50 d-flex flex-column align-items-start text-center my-5 mx-auto">
      <h1 className="text-center mt-4">CONTACT</h1>
      <h3>🏘️1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</h3>
      <h3>✉️contact@clarusway.com</h3>
      <h3>📞+1 (571) 360 66 77</h3>
      <div className="mt-3">
        <button className="btn btn-warning me-3" onClick={()=>navigate(-1)} >BACK</button>
        <button className="btn btn-success" onClick={()=>navigate("/home")}>HOME</button>
      </div>
    </div>
  );
};

export default Contact;
