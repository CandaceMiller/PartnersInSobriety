const Volunteer = require('../models/volunteer');
const createJWT = require('../helper/createJWT');

createVolunteer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a volunteer',
        })
    }
    const volunteer = new Volunteer(body)
    if (!volunteer) {
        return res.status(400).json({ success: false, error: err })
    }
    volunteer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: volunteer._id,
                message: 'Volunteer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Volunteer not created!',
            })
        })
}

checkVolunteer = (req, res) => {
    let info = req.body
    Volunteer.find({ email: info.email }).then(account => {
        if (account[0].password === info.password) {
            res.send({
                firstName: account[0].firstName,
                email: account[0].email
            })
        }
    })
}

updateVolunteer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a volunteer to update',
        })
    }

    Volunteer.findOne({ _id: req.params.id }, (err, volunteer) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Volunteer not found!',
            })
        }
        volunteer.email = body.email
        volunteer.password = body.password
        volunteer
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: volunteer._id,
                    message: 'Volunteer updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Volunteer not updated!',
                })
            })
    })
}

const logInVolunteer = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Make sure the email and password are present for login
        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Invalid credentials." });
        }
        const volunteer = await Volunteer.findOne({ email: email });
        // Check to see if user exists
        if (!volunteer) {
            return res.status(404).json({ success: false, error: "Volunteer does not exist." });
        }
        // Proceed with the login
        volunteer.comparePassword(password, async (err, isMatch) => {
            // Check to see if any errors are present
            if (err) {
                return res.status(400).json({ success: false, error: "Something went wrong during login." });
            }
            // Check to see if the password was a match
            if (!isMatch) {
                return res.status(400).json({ success: false, error: "Invalid credentials" });
            }
            // Else, generate a new JWT token
            const token = await createJWT(volunteer);
            return res.status(200).json({ success: true, token: token, message: "Successful login." });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed logging in volunteer, something went wrong." })
    }
}

deleteVolunteer = async (req, res) => {
    await Volunteer.findOneAndDelete({ _id: req.params.id }, (err, volunteer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!volunteer) {
            return res
                .status(404)
                .json({ success: false, error: `Volunteer not found` })
        }
        return res.status(200).json({ success: true, data: volunteer })
    }).catch(err => console.log(err))
}

getVolunteer = (req, res) => {
    Volunteer.find({}, (err, volunteer) => {
        console.log('Volunteer', volunteer)
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!volunteer.length) {
            console.log('noVol')
            return res
                .status(200)
                .json({ success: false, error: `Volunteer not found` })
        }
        return res.status(200).json({ success: true, data: volunteer })
    }).catch(err => console.log(err))
}

module.exports = {
    createVolunteer,
    logInVolunteer,
    updateVolunteer,
    deleteVolunteer,
    getVolunteer,
    checkVolunteer
}