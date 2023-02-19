import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
//this is all my sponsor apis
const createSignUpSponsor = payload => api.post(`/signUpSponsor`, payload)
const getAllSponsors = () => api.get(`/sponsors/list`)
const updateSponsorById = (id, payload) => api.put(`/sponsor/${id}`, payload)
const deleteSponsorById = (id, payload) => api.put(`/sponsor/${id}`, payload)
//this is all my addict apis
const createSignUpAddict = payload => api.post(`/signUpAddict`, payload)
const getAllAddicts = () => api.get(`/addict/list`)
const updateAddictById = (id, payload) => api.put(`/addict/${id}`, payload)
const deleteAddictById = (id, payload) => api.put(`/addict/${id}`, payload)
//this is all my volunteer apis
const createSignUpVolunteer = payload => api.post(`/signUpVolunteer`, payload)
const getAllVolunteer = () => api.get(`/volunteer/list`)
const updateVolunteerById = (id, payload) => api.put(`/volunteer/${id}`, payload)
const deleteVolunteerById = (id, payload) => api.put(`/volunteer/${id}`, payload)

const handleSponsorSignup = async newSponsor => {
    console.log('Sending form to api', newSponsor);
    const res = await api.post('/signUpSponsor', newSponsor);
    return res;
}
const handleAddictSignup = async newAddict => {
    console.log('Sending form to api', newAddict);
    const res = await api.post('/signUpAddict', newAddict);
    return res;
}
const handleVolunteerSignup = async newVolunteer => {
    console.log('Sending form to api', newVolunteer);
    const res = await api.post('/signUpVolunteer', newVolunteer);
    return res;
}
/*   User login   */
const handleSponsorLogin = async sponsor => {
    console.log('Logging in sponsor', sponsor);
    const res = await api.post('/checkSponsor', sponsor);
    return res;
}
const handleAddictLogin = async addict => {
    console.log('Logging in addict', addict);
    const res = await api.post('/checkAddict', addict);
    return res;
}
const handleVolunteerLogin = async Volunteer => {
    console.log('Logging in Volunteer', Volunteer);
    const res = await api.post('/checkVolunteer', Volunteer);
    return res;
}
/* User information */
const sponsorInfo = async () => {
    console.log('Getting sponsor info');
    const token = window.localStorage.getItem('api_token');
    const res = await api.get('/sponsor', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}
const addictInfo = async () => {
    console.log('Getting addict info');
    const token = window.localStorage.getItem('api_token');
    const res = await api.get('/addict', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}
const volunteerInfo = async () => {
    console.log('Getting volunteer info');
    const token = window.localStorage.getItem('api_token');
    const res = await api.get('/volunteer', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}

const apis = {
    createSignUpSponsor,
    handleSponsorSignup,
    handleSponsorLogin,
    getAllSponsors,
    updateSponsorById,
    deleteSponsorById,
    sponsorInfo,
    createSignUpAddict,
    handleAddictSignup,
    handleAddictLogin,
    getAllAddicts,
    updateAddictById,
    deleteAddictById,
    addictInfo,
    createSignUpVolunteer,
    handleVolunteerSignup,
    handleVolunteerLogin,
    getAllVolunteer,
    updateVolunteerById,
    deleteVolunteerById,
    volunteerInfo
}

export default apis