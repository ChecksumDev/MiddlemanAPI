let { Apikeys } = require('./database');

async function authenticateToken(req, res, next) {
    let authHeader = req.headers['authorization'];
    let token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    await Apikeys.findOne({ where: { key: `${token}` } }).then((encounter) => {
        if (!encounter) return res.status(401).send("Unauthorized");
        return next();
    });
}

exports.authenticateToken = authenticateToken;