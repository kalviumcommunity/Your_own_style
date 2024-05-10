const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const jwt = require('jsonwebtoken')
const deleteRouter = express.Router();
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
getRouter.get('/api/getalltops',authenticateToken,async (req, res) => {
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


getRouter.get('/api/gettop/:id',authenticateToken,async (req, res) => {
    try{
        const top = await tops.findone({Id:req.params.id});
        res.status(200).json(top);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})





postRouter.post('/api/addtop',authenticateToken,async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{Id,Teams,Ranking,M,W,L,T,NR,PT,NRR,For,Against,OwnedBy} = req.body;
                const top = await trops.create({Id,Teams,Ranking,M,W,L,T,NR,PT,NRR,For,Against,OwnedBy});
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

putRouter.patch('/api/updatetop/:id',authenticateToken,async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        let{Id,Teams,Ranking,M,W,L,T,NR,PT,NRR,For,Against,OwnedBy} = req.body;
        const top = await trops.findOneAndUpdate(filter,{Id,Teams,Ranking,M,W,L,T,NR,PT,NRR,For,Against,OwnedBy});
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

deleteRouter.delete('/api/deletetop/:id',authenticateToken,async (req, res) => {
    try {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        const top = await trops.findOneAndDelete(filter);
        res.status(200).json(top);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {getRouter, postRouter, deleteRouter, putRouter}