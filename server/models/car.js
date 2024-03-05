// import the mongoose lib
const mongoose = require("mongoose")

// the Car model
const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    brand: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
    },
    category: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
    },
    condition: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
    },
    running: {
        type: Boolean,
        default: true

    },
    rarity: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        enum: { values: ["Ordinary", "Rare", "Jewel"], message: "{PATH} is invalid!" }
    },
    hp: {
        type: Number,
        trim: true,
        required: [true, "{PATH} is required"],
        min: [1, "{VALUE} is less than 1 hp"]

    },
    mileage: {
        type: Number,
        trim: true,
        required: [true, "{PATH} is required"],
        min: [1, "{VALUE} is less than 1 Km"]
    },
    maxSpeed: {
        type: Number,
        required: [true, "{PATH} is required"],
        integer: true,
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "{PATH} is required"],

        trim: true,
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        trim: true,
    },

    city: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
    },
    interiorColor: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    exteriorColor: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    description: {
        type: String,
    },
    photos: {
        type: [String],
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    status: {
        type: String,
        default: "pending"
    },
    phoneNumber:{
        type :Number ,
        require :[true,'{PATH} must be present']
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    { timestamps: true },
);
const Car = mongoose.model("Car", CarSchema);
module.exports = Car;