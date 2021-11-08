const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);

app.use((req, res, next) => {
    res.json({
        errors: [{
            msg: "Api Not Found!"
        }]
    });
});

app.get

app.listen(5000);
module.exports = app
