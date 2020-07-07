const { Router } = require('express');
bodyParser = require('body-parser').json();

const GridStationModel = require('../models/gridStationModel.js');

const router = Router();

// task 3.1 send all  GridStations from db
router.get('/', async (req,res,next) =>{
    try{
        const grid = await GridStationModel.find();

        res.status(200).json({
            status:"success",
            data:{
                grid 
            }
        });
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err 
        })
        next()
    }

});

// task 3.2 / add new gridStationData to db 
router.post('/',bodyParser, async (req,res ,next) =>{
    try{
        
        const newGrid = await GridStationModel.create(req.body);
        res.status(200).json({
            status: 'success',
            data: newGrid
        });

    }catch(error){
        if(error.name === 'ValidationError')
            res.status(422);
        next(error);
    }
});

//task 3.3 / update the GridStationData to db

router.patch('/update-station/:id',bodyParser,async (req,res,next) =>{
    try{
       const updatedGrid = await GridStationModel.findByIdAndUpdate(req.params.id,req.body,{
           new:true,
           runValidators:true
       });
       
       res.status(200).json({
           status : 'success',
           data : updatedGrid

       });
    
    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err 
        });
    }
});

//Task 3.3 / delete the GridStation from db
router.delete('/delete-station/:id', async (req,res) =>{
    try{
        await GridStationModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status : 'success',
            data: null

        });
    }catch(err){
        res.status(404).json({
            status: 'Fail',
            message: err 
        })
    }
});

//Task 3.4 find the GridStation By Id
router.get('/find-station/:id',async(req,res)=>{
    try{
        const Grid = await GridStationModel.findById(req.params.id);
        res.status(200).json({
            status : 'success',
            data:{
                Grid 
            }
        });
    }catch(err){
        res.status(404).json({
            status : 'fail',
            message : err  
        });
    }
});

module.exports = router;
