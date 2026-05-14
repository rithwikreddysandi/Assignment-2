const { invalidTokens } = require("../models/investorModel")
const { verifyJwt } = require("./authManager")

const checkAccess = (req, res, next) => {
    const token = req.headers.authorization
    try {
        if (invalidTokens.find((t) => t == token)) {
            return res.send("Token Expired")
        }
        const payload = verifyJwt(token)
        if (payload.role == "investor") {
            next()
        } else {
            return res.json("Invalid Permission")
        }
    } catch (error) {
        res.json("Authentication Failed")
    }
}

module.exports = {checkAccess}