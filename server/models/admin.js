const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const adminSchema = new Schema({
    
    adminName: {
        type: String,
        required: true,
        trim: true
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    address: {
        type: String
    }
});

// set up re-save middleware to create password
adminSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare entered password with hashed password
adminSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;