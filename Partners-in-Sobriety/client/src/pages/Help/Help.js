import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./Help.css";

const Help = () => {
    return (
        <div className="text-center">
            <h1 className="info">
                WHAT WE NEED HELP WITH TODAY!!
            </h1>
            <Link
                to='/Options'>
                <Button
                    type="submit"
                    className="home mb-3">
                    Home
                </Button>
            </Link>
            <div className='comment mt-3'>
                <h4 className='group mt-2'>
                    ~Alcoholics Anonymous~
                </h4>
                <h3 className='group'>
                    Upon Awakening Group
                </h3>
                <br />
                <p>@</p>
                <h3 className="group">3rd Street Church of God</h3>
                <a href="#" className="address">427 3rd St.Fort Wayne, IN.46808</a>
                <div className='time mt-3'>
                    5:45 AM
                </div>
                <Link
                    to='/Options'>
                    <Button
                        onClick={() => alert('You will recieve an email with your confirmation. Thank you so much!')}
                        type="submit"
                        className="set mt-2">
                        Help set up this meeting
                    </Button>
                </Link>
                <div className='time mt-3'>
                    7:15 AM
                </div>
                <Link
                    to='/Options'>
                    <Button
                        onClick={() => alert('You will recieve an email with your confirmation. Thank you so much!')}
                        type="submit"
                        className="clean mt-2">
                        Help clean up after this meeting
                    </Button>
                </Link>
            </div>
            <div className='comment mt-5'>
                <h3 className="Rides">Rides</h3>
                <div className='time'>
                    9:45 AM
                </div>
                <Link
                    to='/Options'>
                    <Button
                        onClick={() => alert('You will recieve an email with your confirmation. Thank you so much!')}
                        type="submit"
                        className="rideTo mt-2">
                        Give Josh a ride to work
                    </Button>
                </Link>
                <p className="mt-3">From :</p>
                <h3 className='rehab'>
                    Hope Alive
                </h3>
                <a href="#" className="address">1747 North Wells St. Fort Wayne, IN.46808</a>
                <br />
                <p className="mt-3">To :</p>
                <h3 className="work">Parkview Field</h3>
                <a href="#" className="address">1301 Ewing Street
                Fort Wayne, IN 46802</a>
                <div className='time mt-3'>
                    6:00 PM
                </div>
                <Link
                    to='/Options'>
                    <Button
                        onClick={() => alert('You will recieve an email with your confirmation. Thank you so much!')}
                        type="submit"
                        className="rideFrom mt-2">
                        Pick Josh up from work
                    </Button>
                </Link>
            </div>
            <div className='comment mt-5'>
                <h4 className='group mt-2'>
                    ~Celebrate Recovery~
                </h4>
                <p>@</p>
                <h3 className='group'>
                    Grace Point Church
                </h3>
                <br />
                <a href="#" className="address">8611 Mayhew Rd. Fort Wayne, IN. 46802</a>
                <div className='time mt-3'>
                    6:45 PM - 8:15 PM
                </div>
                <Link
                    to='/Options'>
                    <Button
                        onClick={() => alert('You will recieve an email with your confirmation. Thank you so much!')}
                        type="submit"
                        className="runThis mt-2 mb-5">
                        Help Run This Meeting
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default Help;