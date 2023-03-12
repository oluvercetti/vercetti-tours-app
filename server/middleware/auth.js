const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    try {
        const token = req.header("bta-auth");
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        await console.log(decoded);
        next();
    } catch (e) {
        res.status(401).send({ error: "Invalid token" });
    }
};

module.exports = auth;