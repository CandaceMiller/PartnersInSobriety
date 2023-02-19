import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import "./SponsorSurvey.css";

function SponsorSurvey() {
    const [Sobriety, setSobriety] = useState(null)
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState(null)
    const [meetings, setMeetings] = useState(null)
    const [recovery, setRecovery] = useState(null)
    const [surveyAnswer, setSurveyAnswer] = useState([])
    const answers = (e) => {
        e.preventDefault()
        if (surveyAnswer.length === 0) {
            setSurveyAnswer([...surveyAnswer, Sobriety, age, gender, meetings, recovery])
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const newMatch = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        const response = await fetch('/api/matches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMatch),
        });
        const data = response.json();
        this.setState({
            submitted: true,
            data,
        });
        console.log(data);
    };
    return (
        <>
            <nav className="shadowbox text-center">
                <h1 className="site mt-3">Partners in Sobriety -- Sponsors Survey</h1>
                <h4 className="city navbar-brand">Ft. Wayne, Indiana</h4>
                <Link
                    to='/'>
                    <Button
                        type="submit"
                        className="logMeOut">
                        Log Out
                    </Button>
                </Link>
            </nav>
            <div className="text-center">
                <Form onSubmit={answers}>
                    <div className="survey">
                        <h4 className="quest1">
                            1. How long have you been sober?
                        </h4>
                        <input
                            onChange={(e) => setSobriety(e.target.value)}
                            className="question1"
                            type="radio"
                            value="1"
                            name="question1"
                            id="option1"
                            required />
                        <label
                            htmlFor="option1"
                            className="answers">
                            1 year
                        </label>
                        <input
                            onChange={(e) => setSobriety(e.target.value)}
                            className="question1"
                            type="radio"
                            value="2"
                            name="question1"
                            id="option2"
                            required />
                        <label
                            htmlFor="option2"
                            className="answers">
                            2 years
                        </label>
                        <input
                            onChange={(e) => setSobriety(e.target.value)}
                            className="question1"
                            type="radio"
                            value="3"
                            name="question1"
                            id="option3"
                            required />
                        <label
                            htmlFor="option3"
                            className="answers">
                            3 years
                        </label>
                        <input
                            onChange={(e) => setSobriety(e.target.value)}
                            className="question1"
                            type="radio"
                            value="4"
                            name="question1"
                            id="option4"
                            required />
                        <label
                            htmlFor="option4"
                            className="answers">
                            4 years
                        </label>
                        <input
                            onChange={(e) => setSobriety(e.target.value)}
                            className="question1"
                            type="radio"
                            value="5"
                            name="question1"
                            id="option5"
                            required />
                        <label
                            htmlFor="option5"
                            className="answers">
                            5+ years
                        </label>
                    </div>

                    <div className="text-center mt-5">
                        <h4 className="quest2">
                            2. What's your age range?
                        </h4>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            className="question2"
                            type="radio"
                            value="1"
                            name="question2"
                            id="option1"
                            required />
                        <label
                            htmlFor="option1"
                            className="answers">
                            Teens
                        </label>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            className="question2"
                            type="radio"
                            value="2"
                            name="question2"
                            id="option2"
                            required />
                        <label
                            htmlFor="option2"
                            className="answers">
                            20-30
                        </label>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            className="question2"
                            type="radio"
                            value="3"
                            name="question2"
                            id="option3"
                            required />
                        <label
                            htmlFor="option3"
                            className="answers">
                            31-40
                        </label>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            className="question2"
                            type="radio"
                            value="4"
                            name="question2"
                            id="option4"
                            required />
                        <label
                            htmlFor="option4"
                            className="answers">
                            41-50
                        </label>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            className="question2"
                            type="radio"
                            value="5"
                            name="question2"
                            id="option5"
                            required />
                        <label
                            htmlFor="option5"
                            className="answers">
                            50+
                        </label>
                    </div>

                    <div className="text-center mt-5">
                        <h4 className="quest3">
                            3. What's your gender?
                        </h4>
                        <input
                            onChange={(e) => setGender(e.target.value)}
                            className="question3"
                            type="radio"
                            value="1"
                            name="question3"
                            id="option1"
                            required />
                        <label
                            htmlFor="option1"
                            className="answers">
                            Male
                        </label>
                        <input
                            onChange={(e) => setGender(e.target.value)}
                            className="question3"
                            type="radio"
                            value="2"
                            name="question3"
                            id="option2"
                            required />
                        <label
                            htmlFor="option2"
                            className="answers">
                            Female
                        </label>
                        <input
                            onChange={(e) => setGender(e.target.value)}
                            className="question3"
                            type="radio"
                            value="3"
                            name="question3"
                            id="option3"
                            required />
                        <label
                            htmlFor="option3"
                            className="answers">
                            Transgender
                        </label>
                        <input
                            onChange={(e) => setGender(e.target.value)}
                            className="question3"
                            type="radio"
                            value="4"
                            name="question3"
                            id="option4"
                            required />
                        <label
                            htmlFor="option4"
                            className="answers">
                            Prefer not to answer
                        </label>
                    </div>

                    <div className="text-center mt-5">
                        <h4 className="quest4">
                            4. Do you attend meetings?
                        </h4>
                        <input
                            onChange={(e) => setMeetings(e.target.value)}
                            className="question4"
                            type="radio"
                            value="1"
                            name="question4"
                            id="option1"
                            required />
                        <label
                            htmlFor="option1"
                            className="answers">
                            Yes
                        </label>
                        <input
                            onChange={(e) => setMeetings(e.target.value)}
                            className="question4"
                            type="radio"
                            value="2"
                            name="question4"
                            id="option2"
                            required />
                        <label
                            htmlFor="option2"
                            className="answers">
                            No
                        </label>
                    </div>

                    <div className="text-center mt-5">
                        <h4 className="quest5">
                            5. Did you attend a recovery program?
                        </h4>
                        <input
                            onChange={(e) => setRecovery(e.target.value)}
                            className="question6"
                            type="radio"
                            value="1"
                            name="question6"
                            id="option1"
                            required />
                        <label
                            htmlFor="option1"
                            className="answers">
                            Yes
                        </label>
                        <input
                            onChange={(e) => setRecovery(e.target.value)}
                            className="question6"
                            type="radio"
                            value="2"
                            name="question6"
                            id="option2"
                            required />
                        <label
                            htmlFor="option2"
                            className="answers">
                            No
                        </label>
                    </div>
                    <br />
                    <Link
                        to='/'>
                        <Button
                            onClick={() => alert('You will recieve an email when you are matched!')}
                            type="submit"
                            className="match mb-5">
                            Submit
                        </Button>
                    </Link>
                </Form>
            </div>
        </ >
    );
};

export default SponsorSurvey