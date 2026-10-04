import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true 
    },
    password:{
        type: String,
        required: true,
        trim: true,
        select: false,
        minlength: [8, 'password must be at least 8 characters long']
    },
    role:{
        type: String,
        required: true,
        enum: ['user', 'admin'],
    }
    
}, {timestamps: true});

const User = mongoose.model("user", userSchema);

export default User;