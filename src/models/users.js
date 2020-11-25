const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    username: {
        type: String
    },
    senha: {
        type: String
    },

    endereco: {
        logradouro: [{
            type: String
        }],
        numero: [{
            type: String
        }],
        cidade: [{
            type: String
        }],
        cep: [{
            type: String
        }],
        uf: [{
            type: String
        }],
    },
    cartao: {
        numero: [{
            type: String
        }],
        data: [{
            type: String
        }],
        cvv: [{
            type: String
        }]
    },
    reservas: {
        data: [{
            type: String
        }],
        horario: [{
            type: String
        }],
        numerodepessoas: [{
            type: String
        }]
    }
});

UsersSchema.plugin(mongoosePaginate);

mongoose.model('Users', UsersSchema);