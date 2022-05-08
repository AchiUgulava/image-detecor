import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="pv2 ph3 ph5-m ph6-l mid-gray">
  <small className="f6 db tc">© 2022 <b className="ttu">Achi Ugulava</b>., All Rights Reserved</small>
  <div className="tc mt3">
    <a href="#" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
    <a href="#"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
    <a href="#"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
  </div>
</footer>
  );
}

export default Footer;