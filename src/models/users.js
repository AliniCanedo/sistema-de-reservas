const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    endereco: {
        rua: [{
            type: String
        }]
    }
});

UsersSchema.plugin(mongoosePaginate);

mongoose.model('users', UsersSchema);