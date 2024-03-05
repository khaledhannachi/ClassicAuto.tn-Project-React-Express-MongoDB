const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required:[true, 'Username must be present .'],
        minlength :[3, 'Username must be at least  3 .'],
        trim:true
    },
    email:{
        type : String,
        required:[true, "Email must be present."],
        validate:[isEmail, "Email is not valid."],
        // validate : [value =>  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),"Email is not valid."],
        unique:[true, 'Email already exists. Try to Login.']
    },
    password : {
        type: String,
        required:[true, 'Password must be provided .'],
        minlength:[6, "Password too short."]
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        required: true
    },
    favs: {
        type: [String],
        default: []},

cars : {
    type:[mongoose.Types.ObjectId],
    ref:'car'
},

rating:{
    type :Number,
   
},
review:{
    type :String,
  
}


}, {timestamps:true})

// Confirm Password ?
// Register ? 
/* 
email valid && doesn't exist
Username valid
password valid
password vs confirm PW
*/
// 1 - Create a virtual property 'confirmPW' with getter and setter 
UserSchema.virtual('confirmPW').get(() => this._confirmPW).set(value=> this._confirmPW = value)

// 2 - Validate Password and Confirm Password ?

UserSchema.pre('validate', async function (next) {
    console.log("Inside PASSWORD validation")
    console.log(this)
    if(this.password!=this.confirmPW){
        this.invalidate('confirmPW', "Passwords must match.")
    }
    next()
}, {timestamps:true})
UserSchema.pre('save', async function (next)  {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log('Hashed PASSWORD : ', hashedPassword)
        this.password = hashedPassword;
        next();
    } catch(error) {
        console.log("Error while hashing Password", error)
    }
} )

module.exports = mongoose.model('User', UserSchema);