import React, { Component } from 'react'

class VolunteerUpdate extends Component {
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
                <h1 className="lists mt-5">Here are my Volunteers:</h1>
                {this.state.volunteers.map((volunteer, idx) => {
                    console.log(volunteer)
                    return <Cards
                        id={volunteer._id}
                        type="volunteer"
                        key={idx}
                        firstName={volunteer.firstName}
                        lastName={volunteer.lastName}
                        email={volunteer.email}
                    />
                })}
            </div>
        )
    }
}

export default VolunteerUpdate