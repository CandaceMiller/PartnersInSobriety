import React, { Component } from 'react'
import api from '../../../api'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cards from '../../../components/Cards';

class VolunteerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            volunteers: [],
            errMsg: 'Currently no volunteers'
        }
    }
    componentDidMount = () => {
        api.getAllVolunteer().then(volunteer => {
            console.log(volunteer)
            if (volunteer.data.success === true) {
                this.setState({
                    volunteers: volunteer.data.data,
                })
            }
        })
    }
    render() {
        console.log(this.state)
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
                <h1 className="lists mt-5">Here are my Volunteers:</h1>
                {this.state.volunteers.length > 0 ?
                    <>
                        {
                            this.state.volunteers.map((volunteer, idx) => {
                                console.log(volunteer)
                                return <Cards
                                    id={volunteer._id}
                                    type='volunteer'
                                    key={idx}
                                    firstName={volunteer.firstName}
                                    lastName={volunteer.lastName}
                                    email={volunteer.email}
                                />
                            })
                        }
                    </>
                    :
                    <h4>{this.state.errMsg}</h4>
                }
            </div>
        )
    }
}
export default VolunteerList