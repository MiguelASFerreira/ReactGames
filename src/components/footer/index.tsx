import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./style.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='links'>
        <li>
          <a href={`https://www.linkedin.com/in/miguel-antonio-624ba1234/`}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={`https://github.com/MiguelASFerreira`}>
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className='copy'>
        <strong>Miguel Antonio</strong> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;