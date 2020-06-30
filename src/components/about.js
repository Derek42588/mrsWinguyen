import React from 'react'
import IconFlask from "../assets/flask.svg"


const About = () => (
    <div className="About">
        <IconFlask className = "About__logo-icon" />
        <div className ="About__title-box">
        <h1 className="About__title-box__title">Eklectic Alchemy</h1>
        <p className="About__title-box__description">Handcrafted goods made from natural materials</p>
        </div>
    </div>
)

export default About