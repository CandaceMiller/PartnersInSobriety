import React from 'react';
import { Card, Button } from 'react-bootstrap';
import api from '../../api'
import "./Cards.css"

function Cards(props) {
    const deletePerson = () => {
        if (props.type === 'sponsor') {
            api.deleteSponsorById(props.id).then(res => console.log(res))
        } else if (props.type === 'addict') {
            api.deleteAddictById(props.id).then(res => console.log(res))
        } else {
            api.deleteVolunteerById(props.id).then(res => console.log(res))
        }
        location.assign('/sponsors/list')
    }
    const updatePerson = () => {
        if (props.type === 'sponsor') {
            api.updateSponsorById(props.id).then(res => console.log(res))
        } else if (props.type === 'addict') {
            api.updateAddictById(props.id).then(res => console.log(res))
        } else {
            api.updateVolunteerById(props.id).then(res => console.log(res))
        }
        location.assign('/sponsors/list')
    }
    return (
        <>
            <div className="myCard d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{props.firstName} {props.lastName}</Card.Title>
                        <Card.Text
                            className="words">
                            email: {props.email}
                        </Card.Text>
                        {!props.isAdmin ? <Button onClick={deletePerson} variant="primary" className="delBtn">Delete</Button> : ""}
                        {!props.isAdmin ? <Button onClick={updatePerson} variant="primary" className="updateBtn">Update User</Button> : ""}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Cards;