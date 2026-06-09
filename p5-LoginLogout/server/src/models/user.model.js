import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
},
{timestamps: true});

userSchema.pre("save", async function (){

    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);

})

userSchema.methods.isPasswordCorrect = async function(password){

    return await bcrypt.compare(password, this.password);

}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET
    ,{
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

userSchema.methods.generateAccessToken = async function(){
    return jwt.sign({
        _id: this._id,
        email : this.email
    },
        process.env.ACCESS_TOKEN_SECRET
    ,{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}
const User = mongoose.model("users", userSchema);

export default User;