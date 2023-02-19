import React, { Component } from 'react';
import api from '../../../api';
import '../SponsorsList';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cards from '../../../components/Cards';

class SponsorsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sponsors: [],
            errMsg: 'Currently no sponsors'
        }
    }
    componentDidMount = () => {
        api.getAllSponsors().then(sponsors => {
            console.log('here are my sponsors: ', sponsors)
            this.setState({
                sponsors: sponsors.data.data,

            })
        })
    }
    render() {
        return (
            <div className='wrapper text-center'>
                <Link
                    to='/Admin'>
                    <Button
                        type="submit"
                        className="home">
                        Home
                    </Button>
                </Link>
                <h1 className="lists mt-5">Here are my Sponsors:</h1>
                {this.state.sponsors.map((sponsor, idx) => {
                    return <Cards
                        isAdmin={sponsor.isAdmin}
                        id={sponsor._id}
                        type="sponsor"
                        key={idx}
                        firstName={sponsor.firstName}
                        lastName={sponsor.lastName}
                        email={sponsor.email}
                    />
                })}
                <h4>{this.state.errMsg}</h4>
            </div>
            
        )
    }
}
export default SponsorsList