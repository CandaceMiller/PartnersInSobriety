import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./Admin.css";

const Admin = () => {
    return (
        <div className="text-center">
            <Link
                to='/'>
                <Button
                    type="submit"
                    className="logMeOut">
                    Log Out
                </Button>
            </Link>
            <h1 className="manage mt-5">Manage all accounts...</h1>
            <Link
                to='/sponsors/list'>
                <Button
                    type="submit"
                    className="allSponsorsBtn mt-5 mb-5">
                    All Sponsors
                </Button>
            </Link>
            <br />
            <Link
                to='/addict/list'>
                <Button
                    type="submit"
                    className="allAddictsBtn mt-5 mb-5">
                    All Addicts
                </Button>
            </Link>
            <br />
            <Link
                to='/volunteer/list'>
                <Button
                    type="submit"
                    className="allVolunteersBtn mt-5 mb-5">
                    All Volunteers
                </Button>
            </Link>
        </div>
    )
}

export default Admin;