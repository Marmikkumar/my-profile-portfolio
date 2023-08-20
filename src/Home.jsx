import React from "react";
import Navbar from "./Navbar";
import "./styles.css";
import Footer from "./Footer";
import myimage from "./myimage.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="home">
        <div className="head-content">
          <h1>I'm a Full Stack Web Devloper</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
            consequatur officia natus numquam reiciendis necessitatibus non
            voluptatum quasi illo, consectetur consequuntur obcaecati iste?
            Doloremque odit quibusdam ad excepturi porro.
          </p>
        </div>
        <div className="fig">
          <img
            src={myimage}
            alt="photo"
          ></img>
        </div>
      </div>
    </>
  );
}
