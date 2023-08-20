import React from "react";
import list from "./list.png.png";
import colorgenerator from "./colorgenerator.png";
import constructor from "./constructor.png";
import travel from "./travel.png";
import "./styles.css";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio " id="port">
        <h2>Portfolio</h2>
        <p>Check out some of my work right here:- </p>
      </div>

      <div className="portfolio-box">
        <div className="project">
          <img src={constructor} alt="" />
          <div className="portfolio-content">
            <div className="des">
              <a
                href="https://deluxe-faloodeh-de5dbf.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </div>

            <div className="des">
              <a
                href="https://github.com/Marmikkumar/new-Constructing-website"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={list} alt="" />
          <div className="portfolio-content">
            <div className="des">
              <a href="https://wrklwt.csb.app/" target="_blank">
                Demo
              </a>
            </div>

            <div className="des">
              <a
                href="https://github.com/Marmikkumar/To-do-list"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={travel} alt="" />
          <div className="portfolio-content">
            <div className="des">
              <a
                href="https://deluxe-faloodeh-de5dbf.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </div>

            <div className="des">
              <a
                href="https://github.com/Marmikkumar/travel-website-project"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={colorgenerator} alt="" />
          <div className="portfolio-content">
            <div className="des">
              <a href="https://8svcld.csb.app/" target="_blank">
                Demo
              </a>
            </div>

            <div className="des">
              <a
                href="https://github.com/Marmikkumar/Color-generate"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
