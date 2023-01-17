import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Contact = () => {
  return (
    <div>
    <Navbar/>
      <h1>Hello! Here you are at Contact Page</h1>
      {/* <Link to="/home">Home</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/service">Service</Link><br/> */}
    </div>
  );
};

export default Contact;
