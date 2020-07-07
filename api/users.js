const { Router } = require('express');
bodyParser = require('body-parser').json();

const UserModel = require('../models/userModel.js');

const {signup,login,protect} =require("./../services/authService.js");

const router = Router();

//signup the user
router.post('/signup',bodyParser,signup);

//sign's in the user
router.post('/login',bodyParser,login);

// sends all users from db
router.get('/',protect, async (req, res) => {
    try{
    const users = await UserModel.find();
    res.json(users);
    }catch(error){
        next(error);
    }
});

//adds a new user to the db
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

//task 1.1 / updates the users data to db
router.patch('/update-user/:id',bodyParser,async (req,res,)=>{
   try{

    const user1= await UserModel.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true 
    });

    res.status(200).json({
        status:'success',
        data:{
            user1
        }
    });
   }catch(err){
       res.status(404).json({
           status:'fail',
           message: err
             });
           
        }
    });
// task 1.2 / delete the user from db

router.delete('/delete-user/:id', async (req,res, next) =>{
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            data:null
           });
        }
    catch(err){
        res.status(404).json({
            status:'fail',
            messege: err
        });
    }    
});

//task 1.3 / find by id
router.get('/find-user/:id', async (req, res,next) => {
    try{
    const users = await UserModel.findById(rq.params.id);
    res.status(200).json({
         status : 'success',
         data:{ users }

    });
    }catch(error){
        next(error);
    }
});

module.exports = router;