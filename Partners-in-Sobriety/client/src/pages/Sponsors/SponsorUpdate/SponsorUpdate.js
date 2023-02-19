import React, { Component } from 'react'

class SponsorUpdate extends Component {
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
                    console.log(sponsor)
                    return <Cards
                        id={sponsor._id}
                        type="sponsor"
                        key={idx}
                        firstName={sponsor.firstName}
                        lastName={sponsor.lastName}
                        email={sponsor.email}
                    />
                })}
            </div>
        )
    }
}

export default SponsorUpdate