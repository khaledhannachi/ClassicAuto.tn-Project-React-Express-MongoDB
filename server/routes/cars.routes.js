const CarController = require("../controllers/cars.controller");
const uploadMiddleware = require ('../config/image.config');
const upload = require("../config/image.config");


module.exports = app => {
app.get("/api/cars", CarController.findAllCars);
app.get("/api/cars/count", CarController.countAllCars);
app.get("/api/cars/:id", CarController.findOneCar);
app.get("/api/cars/user/:id", CarController.findCarByUser);
app.patch("/api/cars/:id", CarController.updateExistingCar);
app.post("/api/cars",upload.array("files",5), CarController.createNewCar);
app.delete("/api/cars/:id", CarController.DeleteOneCar);

};
