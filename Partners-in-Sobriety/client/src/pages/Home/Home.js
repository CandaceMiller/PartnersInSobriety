import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../../components/NavBar/NavBar';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="about text-center">
                    <h1 className="welcome mt-5">Welcome Warriors!!</h1>
                    <div className="flex-container mt-5 row">
                        <h3 className="shadowbox2 d-flex align-content-start flex-wrap">Finding a sponsor is a huge deal when deciding to become sober. This site is here specifically for helping to find a sponsor,  to become a sponsor, or to volunteer to help the sponsors or the recovering addicts. Let's help each other!</h3>
                        <h3 className="shadowbox3 d-flex align-content-center flex-wrap">Recovery is something we have to work at every single day, it's something that doesn't take a day off, I'm not telling you it's going to be easy, but I am telling you it's going to be worth it and it doesn't matter how slowly you go as long as you don't stop!</h3>
                        <h3 className="shadowbox4 d-flex align-content-end flex-wrap">This is a safe place for us to come together and make a change in the right direction without judgements. Remember we're all in this together from this day forward and we're super excited to be apart of your journey! Let's get started!!
                        <Link
                                to='/Options'>
                                <Button
                                    type="submit"
                                    className="moreInfo mt-2">
                                    More Info
                            </Button>
                            </Link>
                        </h3>
                    </div>
                    <h2 className="congrats mt-5">Congratulations on being stronger than your past!!</h2>
                </div >
            </>
        )
    }
}
export default Home;