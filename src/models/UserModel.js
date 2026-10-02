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
        unique: true,
        minlength: [8, 'password must be at least 8 characters long']
    },
    role:{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        required: true
    }
    
}, {timestamps: true});

const User = mongoose.Model("user", userSchema);

export default User;