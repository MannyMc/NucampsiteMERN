const express = require('express');
const CampsiteRouter = express.Router();
const Campsite = require('../models/campsite');

CampsiteRouter.get('/', (req, res, next) => {
    //Client is requesting all Campsites in the Database
    Campsite.find()
        .then(campsites => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsites)
        })
        .catch(next);
});

CampsiteRouter.post('/', (req, res, next) => {
    // Client wants to add a Campsite to the Database
    if (req.body) {
        Campsite.create(req.body)
            .then(campsite => {
                console.log("Campsite Created:", campsite)
                res.statusCode = 200;
                res.json(campsite)
            })
            .catch(err => next(err))
    } else {
        console.log("You need to enter information of the campsite you wish to add")
        next(err);
    }
});

CampsiteRouter.put('/', (req, res, next) => {
    // Client want to change a change a Campsite
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

CampsiteRouter.delete('/', (req, res, next) => {
    //Client wants to delete all Campsites
    Campsite.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.json(response);
        })
        .catch(err => next(err));
});


module.exports = CampsiteRouter;