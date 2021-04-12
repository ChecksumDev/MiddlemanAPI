let { Apikeys } = require('./database');
const { debug } = require('./logger');

async function authenticateToken(req, res, next) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let authHeader = req.headers['authorization'];
    let token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        debug(`${ip} sent an unauthorized request to the API.`)
        return res.sendStatus(401);
    }
    await Apikeys.findOne({ where: { key: `${token}` } }).then((encounter) => {
        if (!encounter) {
            debug(`${ip} sent an unauthorized request to the API.`)
            return res.status(401).send("Unauthorized");
        }
        debug(`${ip} sent an authorized request to the API.`)
        return next();
    });
}

exports.authenticateToken = authenticateToken;