const { validationResult } = require('express-validator')
const DB = require('../db.json');

const serverSideErrorResponse = {
    errors: [{ msg: "Serverside errors" }],
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {
            username,
            password,
        } = req.body;
        const user = DB.find(x => x.username === username && x.password === password);
        if (user) {
            res.json({
                response: user,
                errors: []
            })
        } else {
            res.status(404).json({
                response: user,
                errors: [{ msg: 'User not found!' }]
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(serverSideErrorResponse);
    }
}

exports.login = login;