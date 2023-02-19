const Addict = require('../models/addict');
const Sponsor = require('../models/sponsor');
const createJWT = require('../helper/createJWT');

createAddict = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recovering addict',
        })
    }
    const addict = new Addict(body)
    if (!addict) {
        return res.status(400).json({ success: false, error: err })
    }
    addict
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: addict._id,
                message: 'Recovering addict created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Recovering addict not created!',
            })
        })
}
const logInAddict = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Make sure the email and password are present for login
        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Invalid credentials." });
        }
        const addict = await Addict.findOne({ email: email });
        // Check to see if user exists
        if (!addict) {
            return res.status(404).json({ success: false, error: "Recovering addict does not exist." });
        }
        // Proceed with the login
        addict.comparePassword(password, async (err, isMatch) => {
            // Check to see if any errors are present
            if (err) {
                return res.status(400).json({ success: false, error: "Something went wrong during login." });
            }
            // Check to see if the password was a match
            if (!isMatch) {
                return res.status(400).json({ success: false, error: "Invalid credentials" });
            }
            // Else, generate a new JWT token
            const token = await createJWT(addict);
            return res.status(200).json({ success: true, token: token, message: "Successful login." });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed logging in recovering addict, something went wrong." })
    }
}
checkAddict = (req, res) => {
    let info = req.body
    console.log(info)
    Addict.find({ email: info.email }).then(account => {
        if (account[0].password === info.password) {
            res.send({
                firstName: account[0].firstName,
                email: account[0].email
            })
        }
    })
}
deleteAddict = async (req, res) => {
    await Addict.findOneAndDelete({ _id: req.params.id }, (err, addict) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!addict) {
            return res
                .status(404)
                .json({ success: false, error: `Recovering Addict not found` })
        }
        return res.status(200).json({ success: true, data: addict })
    }).catch(err => console.log(err))
}
updateAddict = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recovering addict to update',
        })
    }

    Addict.findOne({ _id: req.params.id }, (err, addict) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Addict not found!',
            })
        }
        addict.email = body.email
        addict.password = body.password
        addict
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: addict._id,
                    message: 'Addict updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Addict not updated!',
                })
            })
    })
}
getAddicts = (req, res) => {
    Addict.find({}, (err, addicts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!addicts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Recovering Addict not found` })
        }
        return res.status(200).json({ success: true, data: addicts })
    }).catch(err => console.log(err))
}
module.exports = {
    createAddict,
    logInAddict,
    updateAddict,
    deleteAddict,
    getAddicts,
    checkAddict
}