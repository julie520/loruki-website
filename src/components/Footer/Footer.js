/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/features">Features</Link>{" "}
            </li>
            <li>
              <Link to="/docs">Docs</Link>{" "}
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="#" target="_blank">
            <FaGithub size={32} />
          </a>
          <a href="#" target="_blank">
            <FaFacebook size={32} />
          </a>
          <a href="#" target="_blank">
            <FaInstagram size={32} />
          </a>
          <a href="#" target="_blank">
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
