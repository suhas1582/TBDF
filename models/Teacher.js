const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const Schema = new mongoose.Schema;

const teacherSchema = Schema({
    first_name: {
        type: String,
        maxLength: 32,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        maxLength: 32,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    institute: {
        type: String,
        required: true
    }
});

teacherSchema.virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv4();
        this.encry_password = this.securePassword(this._password);
    })
    .get(function() {
        return this._password;
    });

teacherSchema.method = {
    authenticate: function(plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password;
    },
    securePassword: function(plainPassword) {
        if(!plainPassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
        } catch(err) {
            console.log(err);
            return "";
        }
    }
}

module.exports = mongoose.model("Teacher", teacherSchema);
