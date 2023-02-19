import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../404";
import "./404.css";

const error = () => {
    return (
        <div className="text-center">
            <h1>There was an error...Please go back and try again!</h1>
            <Link
                to='/'>
                <Button
                    type="submit"
                    className="logMeOut">
                    Log Out
                    </Button>
            </Link>
        </div>
    )
}

export default error;