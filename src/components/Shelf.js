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
          <Link to = "/#AboutMe" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  About Me
            </Link>
        </li>
        <li className="Shelf__list__item">
        <Link to = "/#Projects" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Projects
            </Link>
        </li>
        <li className="Shelf__list__item">
        <Link to = "/#Contact" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Contact
            </Link>
        </li>
        <li className="Shelf__list__item">
        <Link to = "/blog" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Blog
            </Link>
        </li>
        <li className="Shelf__list__item Shelf__list__item--toolbox">
        <ul className="Shelf__list__item__sublist">
            <li className="Shelf__list__item__sublist__item">
              <a href="https://github.com/Derek42588">
                <IconGithub className="Shelf__list__item__sublist__item__icon"/>
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a target="_blank" href={resume}>
                <IconPDF className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a href="tel:+1(201)400-9742">
                <IconPhone className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a href="mailto:derekpyle@gmail.com">
                <IconEmail className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/* <ul className="Shelf__icons-list">
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
      </ul> */}
    </div>
  );
};

export default Shelf;
