require('dotenv').config()
const { Images } = require('./functions/database');
const express = require("express");
const app = express();

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 300000,
    max: 100,
    message: "You have exceeded your anonymous ratelimit!",
    statusCode: 429
});

app.use(limiter);

app.use('/', require('./api/index'))
app.use('/endpoints', require('./api/endpoints'))
app.use('/v1/nsfw', require('./api/v1/nsfw'))
app.use('/v1/sfw', require('./api/v1/sfw'))


app.listen(9999, async () => {
    console.log(`Server is running.`);
    await Images.sync();
});