import React from 'react'
import '../Footer/Footer.css'
//this is my footer info and a link to contact us
function Footer() {
  return (
    <footer className="footer fixed-bottom">&copy; Copyright 2022 Partners in Sobriety
          <span className="facebook nav-item nav-link fa-stack">
        <a href="#" className="contactUs"><i id="facebookLogo" className="fab fa-stack-1x">&#xf09a;</i></a>
      </span>
      <span className="twitter nav-item nav-link fa-stack">
        <a href="#" className="contactUs"><i id="twitterLogo" className="fab fa-stack-1x">&#xf099;</i></a>
      </span>
      <span className="linkedIn nav-item nav-link fa-stack">
        <a href="#" className="contactUs"><i id="linkedInLogo" className="fab fa-stack-1x">&#xf08c;</i></a>
      </span>
      <span className="instagram nav-item nav-link fa-stack">
        <a href="#" className="contactUs"><i id="instagramLogo" className="fab fa-stack-1x">&#xf16d;</i></a>
      </span>
      <a href="#" className="email">Email Us</a>
    </footer >
  )
}

export default Footer