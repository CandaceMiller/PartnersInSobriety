import React, { Component } from 'react'

class AddictUpdate extends Component {
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
                <h1 className="lists mt-5">Here are my Addicts:</h1>
                {this.state.addicts.map((addict, idx) => {
                    console.log(addict)
                    return <Cards
                        id={addict._id}
                        type="addict"
                        key={idx}
                        firstName={addict.firstName}
                        lastName={addict.lastName}
                        email={addict.email}
                    />
                })}
            </div>
        )
    }
}

export default AddictUpdate