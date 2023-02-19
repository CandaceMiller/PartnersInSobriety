import React, { Component } from 'react'
import api from '../../../api'
import './AddictList.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cards from '../../../components/Cards';

class AddictList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addicts: [],
            errMsg: 'Currently no recovering addicts'
        }
    }
    componentDidMount = () => {
        api.getAllAddicts().then(addicts => {
            console.log('here are my recovering addicts: ', addicts)
            this.setState({
                addicts: addicts.data.data,
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
                <h4>{this.state.errMsg}</h4>
            </div>
        )
    }
}

export default AddictList