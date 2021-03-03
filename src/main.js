require('dotenv').config()
let { Images, Apikeys } = require('./functions/database');
let express = require("express");
const { authenticateToken } = require("./functions/authenticateToken");
let app = express();
let port = process.env.PORT || 9999;

app.use(authenticateToken)
app.use('/', require('./api/index'))
app.use('/endpoints', require('./api/endpoints'))
app.use('/v1/nsfw', require('./api/v1/nsfw'))
app.use('/v1/sfw', require('./api/v1/sfw'))


app.listen(port, async () => {
    console.log(`Server is running.`);
    await Images.sync();
    await Apikeys.sync();
});