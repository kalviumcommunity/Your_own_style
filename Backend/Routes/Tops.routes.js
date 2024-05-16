const express = require('express')
const topRouter = express.Router();
const jwt = require('jsonwebtoken')
const tops = require("../Modal/TopsModal")
const Joi = require('joi');
require('dotenv').config()

const schema = Joi.object({
    CATEGORIES:Joi.string().required(),
    NAME:Joi.string().required(),
    IMAGES:Joi.string().required(),
    RATING:Joi.number().required(),
    SIZE_1:Joi.string().required(),
    SIZE_2:Joi.string().required(),
    SIZE_3:Joi.string().required(),
    SIZE_4:Joi.string().required(),
    SIZE_5:Joi.string().required(),
    SIZE_6:Joi.string().required(),
    });
    const authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if(token==null) return res.sendStatus(401)
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
          if(err) return res.sendStatus(403)
          next()
        })
      }
topRouter.get('/api/getalltops',async (req, res) => {
    try{
        const top = await tops.find();
        res.status(200).json(top);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}`
        })
    }
})


topRouter.get('/api/gettop/:id',authenticateToken,async (req, res) => {
    try{
        const top = await tops.findone({_id:req.params._id});
        res.status(200).json(top);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})





topRouter.post('/api/addtop',authenticateToken,async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{CATEGORIES,NAME,IMAGES,RATING,SIZE_1,SIZE_2,SIZE_3,SIZE_4,SIZE_5,SIZE_6} = req.body;
                const top = await tops.create({CATEGORIES,NAME,IMAGES,RATING,SIZE_1,SIZE_2,SIZE_3,SIZE_4,SIZE_5,SIZE_6});
                res.status(201).json(top);}
                else {
                    return res.status(400).send({
                        message: `Bad request, error:${error}`
                    })
                    console.error(error)
                }
            } catch(err){
                console.log(err);
                return res.status(500).send({
                    message: "Internal server error"
                })
            }
            
        
})

topRouter.patch('/api/updatetop/:id',authenticateToken,async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {_id} = req.params;
        let{CATEGORIES,NAME,IMAGES,RATING,SIZE_1,SIZE_2,SIZE_3,SIZE_4,SIZE_5,SIZE_6} = req.body;
        const top = await tops.findOneAndUpdate({_id:_id},{CATEGORIES,NAME,IMAGES,RATING,SIZE_1,SIZE_2,SIZE_3,SIZE_4,SIZE_5,SIZE_6});
        res.status(200).json(top);}
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

topRouter.delete('/api/deletetop/:id',authenticateToken,async (req, res) => {
    try {
        const {_id} = req.params;
        const top = await tops.findOneAndDelete({_id:_id});
        res.status(200).json(top);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {topRouter}