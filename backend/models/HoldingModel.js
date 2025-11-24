const { model } = require('mongoose');

const { HoldingSchemas } = require('../schemas/HoldingSchemas');

const HoldingModel = new model("Holding", HoldingSchemas);

module.exports = { HoldingModel };
