// the controller does the C R U D for DB
const mongoose = require("mongoose");
const Car = require("../models/car");
const multer = require('multer');
const path = require('path');

// console.log(Car)
//  READ ALL Car
module.exports.findAllCars = (req, res) => {
    Car.find()
        .then((cars) => {
            res.json(cars);
        })
        .catch((err) => res.json(err));
};
// // find cars sold
// module.exports.findAllCarsSold = (req, res) => {
//     Car.find({status:"Sold"})
//         .then((cars) => {
//             res.json(cars);
//         })
//         .catch((err) => res.json(err));
// };
// // find cars Pending 
// module.exports.findAllCarsPending = (req, res) => {
//     Car.find({status:"pending"})
//         .then((cars) => {
//             res.json(cars);
//         })
//         .catch((err) => res.json(err));
// };
// module.exports.findAllCarsForSell = (req, res) => {
//     Car.find({status:"Sell"})
//         .then((cars) => {
//             res.json(cars);
//         })
//         .catch((err) => res.json(err));
// };


// Read One By ID
module.exports.findOneCar = (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(oneCar => {
            res.json(oneCar);
        })
        .catch((err) => res.json(err));
}

// Read All cars By user ID
module.exports.findCarByUser = (req, res) => {
    Car.find({ user: req.params.id })
        .then(oneCar => {
            res.json(oneCar);
        })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNewCar = (req, res) => {
    console.log('THIS IS REQ FILE =====>', req.files);
    console.log('THIS IS REQ BODY =====>', req.body);
    let files = req.files;
    let paths = []
    files.forEach((file) => {
        paths.push('/images/' + file.filename)
    })
    Car.create({ ...req.body, photos: paths })
        .then((newlyCreatedCar) => {
            res.json(newlyCreatedCar)
        })
        .catch((err) => {
            res.status(400).json(err)
            console.log(err);
        });
}
// UPDATE
module.exports.updateExistingCar = (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateCar) => {
            res.json(updateCar)
        })
        .catch((err) => res.status(400).json(err));
};
// DELETE   
module.exports.DeleteOneCar = (req, res) => {
    Car.deleteOne({ _id: req.params.id })
        .then((deletedCar) => {
            res.json(deletedCar)
        })
        .catch((err) => res.json(err));
};
// Count ALL Car
module.exports.countAllCars = (req, res) => {
    Car.find().count()
        .then((count) => {
            res.json(count);
        })
        .catch((err) => res.json(err));
};