import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <a
          href="github.com/Marmikkumar"
          target="_blank"
          className="footer-link"
        >
          <i className="fa-brands fa-github footer-link"></i>
        </a>
        <a
          href="www.linkedin.com/in/marmik-kumar-055137238/"
          className="footer-link"
        >
          <i className="fa-brands fa-linkedin footer-link"></i>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/popout?ver=1g3ytthb29lwb#cmid%253D1"
          className="footer-link"
        >
          <i className="fa-solid fa-envelope footer-link"></i>
        </a>
        <a href="" className="footer-link">
          <i className="fa-solid fa-file footer-link"></i>
        </a>
      </div>
    </div>
  );
}
