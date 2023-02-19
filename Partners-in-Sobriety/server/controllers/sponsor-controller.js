const Sponsor = require('../models/sponsor');
const createJWT = require('../helper/createJWT');

createSponsor = (req, res) => {
    const body = req.body
    console.log(body)
    Sponsor.create(body).then(account => {
        res.send(account)
        console.log(account)
    })
}

updateSponsor = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a sponsor to update',
        })
    }

    Sponsor.findOne({ _id: req.params.id }, (err, sponsor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Sponsor not found!',
            })
        }
        sponsor.email = body.email
        sponsor.password = body.password
        sponsor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sponsor._id,
                    message: 'Sponsor updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Sponsor not updated!',
                })
            })
    })
}

const logInSponsor = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('BODY', req.body)
        // Make sure the email and password are present for login
        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Invalid credentials." });
        }
        const sponsor = await Sponsor.findOne({ email: email });
        // Check to see if user exists
        if (!sponsor) {
            return res.status(404).json({ success: false, error: "Sponsor does not exist." });
        }
        // Proceed with the login
        sponsor.comparePassword(password, async (err, isMatch) => {
            // Check to see if any errors are present
            if (err) {
                return res.status(400).json({ success: false, error: "Something went wrong during login." });
            }
            // Check to see if the password was a match
            if (!isMatch) {
                return res.status(400).json({ success: false, error: "Invalid credentials" });
            }
            // Else, generate a new JWT token
            const token = await createJWT(sponsor);
            return res.status(200).json({ success: true, token: token, message: "Successful login." });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed logging in sponsor, something went wrong." })
    }
}

deleteSponsor = (req, res) => {
    Sponsor.findOneAndDelete({ _id: req.params.id }, (err, sponsor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sponsor) {
            return res
                .status(404)
                .json({ success: false, error: `Sponsor not found` })
        }
        return res.status(200).json({ success: true, data: sponsor })
    }).catch(err => console.log(err))
}

getSponsors = (req, res) => {
    Sponsor.find({}, (err, sponsors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sponsors.length) {
            return res
                .status(404)
                .json({ success: false, error: `Sponsor not found` })
        }
        return res.status(200).json({ success: true, data: sponsors })
    }).catch(err => console.log(err))
}


module.exports = {
    createSponsor,
    logInSponsor,
    deleteSponsor,
    updateSponsor,
    getSponsors
}