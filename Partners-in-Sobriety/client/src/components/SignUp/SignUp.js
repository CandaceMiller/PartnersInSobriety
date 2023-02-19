import React, { Component } from 'react';
import api from '../../api/index'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./SignUp.css"
//this is where users will sign up and their info will be saved for future use
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            person: null
        }
    }
    handleSubmit = (e) => {
        localStorage.setItem('loggedInUser', JSON.stringify(this.state));
        e.preventDefault()
        this.setState({ show: false });
        if (this.state.person === 'sponsor') {
            let account = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            api.handleSponsorSignup(account).then(person => {
                const token = person.data;
                window.localStorage.setItem('api_token', JSON.stringify(token));
                return this.state
            })
            window.location = '/sponsorSurvey'
        } else if (this.state.person === 'addict') {
            let account = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            api.handleAddictSignup(account).then(person => {
                const { token } = person.data;
                window.localStorage.setItem('api_token', JSON.stringify(token))
                return this.state
            })
            window.location = '/addictSurvey'
        }
        else {
            let account = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
            }
            api.handleVolunteerSignup(account).then(person => {
                const { token } = person.data;
                window.localStorage.setItem('api_token', JSON.stringify(token))
                return this.state
            })
            window.location = '/Help'
        }
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => this.setState({ show: true });
    render() {
        console.log(this.state)
        return (
            <>
                <Button
                    className="signUp"
                    onClick={this.handleShow}>
                    Sign Up
            </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Sign Up
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Check
                                type="radio"
                                label="Sponsor"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="sponsor"
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Check
                                type="radio"
                                label="Recovering Addict"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="addict"
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Check
                                type="radio"
                                label="Volunteer"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                value="volunteer"
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Control
                                type="firstName"
                                required
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={e => this.setState({ firstName: e.target.value })} />
                            <Form.Control
                                type="lastName"
                                required
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={e => this.setState({ lastName: e.target.value })} />
                            <Form.Control
                                className="email"
                                type="email"
                                required
                                placeholder="Email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })} />
                            <Form.Control
                                className="password"
                                type="password"
                                required
                                placeholder="Password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock" />
                            <Button
                                type="submit"
                                className="signMeUp">
                                Sign Me Up
                        </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default SignUp;