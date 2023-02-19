const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Volunteer = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
)
Volunteer.pre('save', function (next) {
    const signUp = this;
    // Create salt string
    bcrypt.genSalt(SALT, function (err, salt) {
        // If err, return
        if (err) return next(err);
        // Hash password and save
        bcrypt.hash(signUp.password, salt, function (err, hash) {
            // If err, return
            if (err) return next(err);
            signUp.password = hash;
            next(); // Proceed with the next operation
        });
    });
});

/*  Compare login password with user's password from the database  */
Volunteer.methods.comparePassword = function (loginPass, callBack) {
    // Use bcrypt to compare and decrypt password in the db.
    bcrypt.compare(loginPass, this.password, function (err, isMatch) {
        // If err, then return the error
        if (err) return callBack(err);
        // Return isMatch parameter (true or false)
        callBack(null, isMatch);
    });
}

module.exports = mongoose.model('volunteer', Volunteer)