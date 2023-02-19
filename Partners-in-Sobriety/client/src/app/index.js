import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SponsorsList from '../pages/Sponsors/SponsorsList';
import SponsorSurvey from '../pages/Sponsors/SponsorSurvey/SponsorSurvey';
import SponsorUpdate from '../pages/Sponsors/SponsorUpdate/SponsorUpdate';
import AddictList from '../pages/Addicts/AddictList';
import AddictSurvey from '../pages/Addicts/AddictSurvey/AddictSurvey';
import AddictUpdate from '../pages/Addicts/AddictUpdate/AddictUpdate';
import VolunteerList from '../pages/Volunteers/VolunteerList';
import VolunteerUpdate from '../pages/Volunteers/VolunteerUpdate/VolunteerUpdate';
import Admin from '../pages/AdminProfile/Admin';
import Help from '../pages/Help/Help';
import Home from '../pages/Home/Home';
import Options from '../pages/Options/Options';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from '../pages/404'

//this is all my routes to my different pages
function App() {
    const token = window.localStorage.getItem('api_token');
    const isLoggedIn = (token) ? true : false;
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/Options' element={<Options />}></Route>
                    <Route exact path='/Help' element={<Help />}></Route>
                    <Route exact path='/Admin' element={<Admin />}></Route>
                    <Route exact path='/SponsorSurvey' element={<SponsorSurvey />}></Route>
                    <Route exact path="/sponsors/list" element={<SponsorsList />}></Route>
                    <Route exact path="/sponsors/update" element={<SponsorUpdate />}></Route>
                    <Route exact path='/AddictSurvey' element={<AddictSurvey />}></Route>
                    <Route exact path="/addict/list" element={<AddictList />}></Route>
                    <Route exact path="/addicts/update" element={<AddictUpdate />}></Route>
                    <Route exact path="/volunteer/list" element={<VolunteerList />}></Route>
                    <Route exact path="/volunteers/update" element={<VolunteerUpdate />}></Route>
                    <Route path="*" status={404} element={<ErrorPage />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App