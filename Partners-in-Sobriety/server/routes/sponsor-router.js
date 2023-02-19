const express = require('express')
const SponsorCtrl = require('../controllers/sponsor-controller')
const AddictCtrl = require('../controllers/addict-controller')
const VolunteerCtrl = require('../controllers/volunteer-controller')
const router = express.Router()
const authenticateToken = require('../helper/verifyJWT');

router.put('/api/sponsor/:id', SponsorCtrl.deleteSponsor)
router.put('/api/addict/:id', AddictCtrl.deleteAddict)
router.put('/api/volunteer/:id', VolunteerCtrl.deleteVolunteer)
router.put('/api/addict/:id', AddictCtrl.updateAddict)
router.put('/api/sponsor/:id', SponsorCtrl.updateSponsor)
router.put('/api/volunteer/:id', VolunteerCtrl.updateVolunteer)
router.get('/api/sponsor', authenticateToken, SponsorCtrl.getSponsors);
router.get('/api/addict', authenticateToken, AddictCtrl.getAddicts);
router.get('/api/volunteer', authenticateToken, VolunteerCtrl.getVolunteer);
router.get('/api/sponsors/list', SponsorCtrl.getSponsors)
router.get('/api/addict/list', AddictCtrl.getAddicts)
router.get('/api/volunteer/list', VolunteerCtrl.getVolunteer)
router.get('/api/errorPage')
// router.post('/api/signUpSponsor', SponsorCtrl.createSponsor)
// router.post('/api/signUpAddict', AddictCtrl.createAddict)
// router.post('/api/signUpVolunteer', VolunteerCtrl.createVolunteer)

module.exports = router