import React from 'react'
import Logo from '../Logo'
import SignUp from '../SignUp'
import LogIn from '../LogIn'
import Clock from '../Clock'
import "./NavBar.css"

//this is my navbar that will be called on different pages it contains The title, location, time, date, and the log in and sign up buttons
function NavBar() {
    return (
        <div className='shadowbox navbar nav navbar-expand-lg'>
            <Logo />
            <div className="navbar-brand navbar-collapse">
                <h1 className="site">Partners in Sobriety</h1><br />
                <h4 className="city">Ft. Wayne, Indiana</h4>
            </div>
            <div className="m-5">
                <Clock />
            </div>
            <div className="m-5">
                <SignUp />
                <LogIn />
            </div>
        </div>
    )
}

export default NavBar;