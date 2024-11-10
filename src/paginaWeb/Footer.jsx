import React from 'react';
import './footer.module.css';
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

function Footer({ RRSS }) {
  return (
    <footer>
      {
        RRSS.map((red, index) => (
          <div className="footer-link" key={index}>
            {red.nombre === "Facebook" && <a href={red.url} target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ fontSize: 40, color: "red" }} /> {red.nombre}</a>}
            {red.nombre === "Instagram" && <a href={red.url} target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ fontSize: 40, color: "green" }} /> {red.nombre}</a>}
            {red.nombre === "LinkedIn" && <a href={red.url} target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 40, color: "blue" }} /> {red.nombre}</a>}
            {red.nombre === "Google" && <a href={red.url} target="_blank" rel="noopener noreferrer"><GoogleIcon sx={{ fontSize: 40, color: "orange" }} /> {red.nombre}</a>}
            {!["Facebook", "Instagram", "LinkedIn", "Google"].includes(red.nombre) && <a href={red.url} target="_blank" rel="noopener noreferrer"><LanguageIcon sx={{ fontSize: 40, color: "brown" }} /> {red.nombre}</a>}
          </div>
        ))
      }
      {/* Enlace del instituto */}
      <div className="footer-link">
        <a href="https://iescuravalera.es" target="_blank" rel="noopener noreferrer"> 
          <img src="/logo.png" width="50" alt="logoIES" /> IES Cura Valera 
        </a>
      </div>
    </footer>
  );
}

export default Footer;