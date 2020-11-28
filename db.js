const bcrypt = require('bcryptjs');

function createUser(username, password, email, rg, cpf, cep, logradouro,
    numero_end, complemento, bairro, estado,
    numero_cartao, data_cartao, cvv, horario_reserva, numero_de_pessoas,
    profile, callback) {
    const cryptoPassword = bcrypt.hashSync(password, 10);
    global.db.collection("users").insertOne({
        username, password: cryptoPassword, email, rg,
        cpf, cep, logradouro,
        numero_end, complemento, bairro, estado,
        numero_cartao, data_cartao, cvv, horario_reserva, numero_de_pessoas,
        profile
    }, callback);
}

function resetPassword(email, callback) {
    const utils = require('./utils');
    const newPassword = utils.generatePassword();
    const cryptoPassword = bcrypt.hashSync(newPassword, 10);
    global.db.collection("users").updateOne({ email: email }, { $set: { password: cryptoPassword } }, (err, res) => {
        callback(err, res, newPassword);
    });
}

function countAll(callback) {
    global.db.collection("users").countDocuments(callback);
}

const TAMANHO_PAGINA = 5;
function findAllUsers(pagina, callback) {
    const totalSkip = (pagina - 1) * TAMANHO_PAGINA;
    global.db.collection("users").find().skip(totalSkip).limit(TAMANHO_PAGINA).toArray(callback);
}

function deleteOne(id, callback){
    global.conn.collection("users").deleteOne({_id: new ObjectId(id)}, callback);
}
module.exports = {
    createUser, resetPassword, findAllUsers, TAMANHO_PAGINA, countAll,deleteOne
}