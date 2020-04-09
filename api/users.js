const { Router } = require('express');
bodyParser = require('body-parser').json();

const UserModel = require('../models/user');

const router = Router();

// sends all users from db
router.get('/', async (req, res) => {
    try{
    const users = await UserModel.find();
    res.json(users);
    }catch(error){
        next(error);
    }
});

// adds a new user to the db
router.post('/', bodyParser, async (req, res, next) => {
    try{
        const user = new UserModel(req.body);
        const createdUser = await user.save();
        res.json(createdUser);
    }catch(error){
        if(error.name === 'ValidationError')
            res.status(422);
        next(error);
    }
});

module.exports = router;