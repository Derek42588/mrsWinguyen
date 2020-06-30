import React from "react"
import About from './about'
import Feature from './featured'
import Reviews from './reviews'



export default function Landing() {

  return (
    <div className="Landing" id="landing">
      <About id = "About"/>
      <Feature id = "Featured"/>
      <Reviews id = "Reviews"/>
    </div>
  )
}
