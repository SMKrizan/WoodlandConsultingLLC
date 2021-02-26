
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const ownerSchema = new Schema({

    ownerName: {
        type: String,
        required: true,
        trim: true
    },
    ownerEmail: {
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
ownerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare entered password with hashed password
ownerSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;