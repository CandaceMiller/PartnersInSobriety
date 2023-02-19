import React from 'react';
import Clock from '../../components/Clock'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./Options.css"

function Options() {
    return (
        <>
            <div className="shadowbox5 text-center">
                <div className="navbar-brand navbar-collapse">
                    <h1 className="site">Partners in Sobriety</h1><br />
                    <h4 className="city">Ft. Wayne, Indiana</h4>
                    <Link
                        to='/'>
                        <Button
                            type="submit"
                            className="home">
                            Home
                    </Button>
                    </Link>
                </div>
                <div className="time">
                    <Clock />
                </div>
            </div>
            <div className='text-center options'>
                <h3 className="sponsor mt-5">Becoming a Sponsor</h3>
                <h5 className="aboutSpons">~ Being a sponsor for someone struggling is so important. You will coach people through the 8 principles / 12 steps. You must be available in times of crisis or potential relapses. You need to be able to be their sounding board by providing objective points of view. They may need to discuss issues with you that are too personal for a meeting. It requires check-in calls. You will need to have at least one year of sobriety, be the same gender and from the same area. You will be able to share experience, strength and hope along with confronting denial and procrastination. Everyone needs to have someone they can count on!! The only real requirement to becoming a sponsor is a desire to help people and dedicate your time to supporting people who need guidance along their journey!! ~ </h5>
                <br />
                <h3 className="addict text-center mt-5">Finding a Sponsor</h3>
                <h5 className="aboutAdd">~ Congratulations on taking this step in your recovery! There are many ways to find a sponsor... You can attend meetings, group leaders will have a phone list of the group members. Get to know the members of your group, this will give you contacts for Accountability Partners and potential sponsors. You can research programs online or you can stop right here and let us help! Remember we are not defined by our relapses, but by the decision we make to remain in recovery despite our relapses. Recovery is an acceptance  that our life is in shambles and we have to change it. We're not going to give up because we're strong and when we've survived all that addiction has put us through we can survive recovery!~</h5>
                <br />
                <h3 className="volunteer text-center mt-5">Becoming a Volunteer</h3>
                <h5 className="aboutVol mb-5">~ Volunteering is generally considered an altruistic activity where an individual or group provides services for no financial gain to benefit another person, group or organization. Volunteering is also renowned for skill development and is often intended to promote goodness or to improve human quality of life. Volunteering may have positive benefits for the volunteer as well as for the person or community served. Many volunteers are specifically trained in the areas they work, such as medicine, education, or emergency rescue. We need volunteers for a number of things, such as, driving recovering addicts to appointments, helping get them to and from meetings, work and helping set up before meetings and clean up after meetings. ~</h5>
            </div>
        </>
    )
}

export default Options;