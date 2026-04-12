const { Schema } = require('mongoose');

const PositionSchema = new Schema({
    product: {
        type: String
    },
    name: {
        type: String
    },
    qty: {
        type: Number
    },
    avg: {
        type: Number
    },
    price: {
        type: Number
    },
    net: {
        type: String
    },
    day: String,
    isLoss: Boolean,
});

module.exports = { PositionSchema };