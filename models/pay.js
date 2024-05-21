const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const paymentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    matricNum: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9/]+$/, 'Invalid matriculation number format.']

    },
    paymentType: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
})

