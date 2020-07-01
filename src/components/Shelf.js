import React from 'react';
// import { HashLink } from 'react-router-hash-link'
import { Link } from 'gatsby'

import IconGithub from "../assets/github.svg"
import IconPDF from "../assets/file-pdf.svg"
import IconPhone from "../assets/mobile.svg"
import IconEmail from "../assets/mail4.svg"

import resume from '../media/DCP Resume 6420.pdf'


const Shelf = ({ toggleShelf, shelfVisible }) => {
  return (
    <div className={'Shelf' + (shelfVisible ? ' shelfVisible' : '')}>
      <ul className="Shelf__list">
        <li className="Shelf__list__item">
          <Link to = "/" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Home
            </Link>
        </li>
        <li className="Shelf__list__item">
        <Link to = "/shop" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Shop
            </Link>
        </li>        
      </ul>
    </div>
  );
};

export default Shelf;
