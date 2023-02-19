const express = require('express')
const SponsorCtrl = require('../controllers/sponsor-controller')
const AddictCtrl = require('../controllers/addict-controller')
const VolunteerCtrl = require('../controllers/volunteer-controller')
const router = express.Router();

router.post('/signUpSponsor', SponsorCtrl.createSponsor);
router.post('/checkSponsor', SponsorCtrl.logInSponsor);

router.post('/signUpAddict', AddictCtrl.createAddict);
router.post('/checkAddict', AddictCtrl.logInAddict);

router.post('/signUpVolunteer', VolunteerCtrl.createVolunteer);
router.post('/checkVolunteer', VolunteerCtrl.checkVolunteer);

module.exports = router;