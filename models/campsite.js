const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampsiteSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    elevation: {
        type: Number,
        require: true,
    },
    featured: {
        type: Boolean,
        default: false,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

const Campsite = mongoose.model('Campsite', CampsiteSchema);
module.exports = Campsite;