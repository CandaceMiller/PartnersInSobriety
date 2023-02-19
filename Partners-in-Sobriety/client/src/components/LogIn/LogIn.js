import React, { Component } from 'react';
import api from '../../api/index'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./LogIn.css"
//this is where users will sign up and their info will be saved for future use
class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ show: false });
        if (this.state.person === 'sponsor') {
            let account = {
                email: this.state.email,
                password: this.state.password,
            }
            await api.handleSponsorLogin(account).then(person => {
                console.log(person)
                const token = person.data.token;
                localStorage.setItem('api_token', JSON.stringify(token));
                return this.state
            })
            window.location = '/sponsorSurvey'
        } else if (person === 'addict') {
            let account = {
                email: email,
                password: password,
            }
            api.handleAddictLogin(account).then(person => {
                console.log(person.data)
                const { token } = person.data;
                localStorage.setItem('api_token', JSON.stringify(token))
                return this.state
            })
            window.location = '/addictSurvey'
        } else {
            let account = {
                email: email,
                password: password,
            }
            api.handleVolunteerLogin(account).then(person => {
                console.log(person.data)
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
                    className="logIn"
                    onClick={this.handleShow}>
                    Log In
            </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Log In
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Check
                                type="radio"
                                label="Sponsor"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value='sponsor'
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Check
                                type="radio"
                                label="Recovering Addict"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value='addict'
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Check
                                type="radio"
                                label="Volunteer"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                value='volunteer'
                                onChange={e => this.setState({ person: e.target.value })} />
                            <Form.Control
                                className="email"
                                type="email"
                                required
                                placeholder="Email"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <Form.Control
                                className="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={e => this.setState({ password: e.target.value })}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock" />
                            <Button
                                type="submit"
                                className="logMeIn">
                                Log Me In
                        </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default LogIn;