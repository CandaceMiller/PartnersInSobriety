const jwt = require('jsonwebtoken');

// Run environmental variables
require('dotenv').config();/* Create token for authentication */
async function createJWT(sponsor) {
    // Get JWT secret from env file
    const { JWT_SECRET } = process.env;
    // Sign and create token
    const token = await jwt.sign({ id: sponsor._id }, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours
    });
    return token;
}
require('dotenv').config();/* Create token for authentication */
async function createJWT(addict) {
    // Get JWT secret from env file
    const { JWT_SECRET } = process.env;
    // Sign and create token
    const token = await jwt.sign({ id: addict._id }, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours
    });
    return token;
}
require('dotenv').config();/* Create token for authentication */
async function createJWT(volunteer) {
    // Get JWT secret from env file
    const { JWT_SECRET } = process.env;
    // Sign and create token
    const token = await jwt.sign({ id: volunteer._id }, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours
    });
    return token;
}

module.exports = createJWT;