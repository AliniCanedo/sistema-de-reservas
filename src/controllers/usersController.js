const mongoose = require('mongoose');
const user = mongoose.model('users');

module.exports = {
    async index(req, res){
        const users = await user.find(req.params);
        return res.json(users);
    },   
    async show(req, res){
        const user = await user.findById(req.params.id);
        return res.json(user);
    },
    async store(req, res){
        const user = await user.create(req.body);
        return res.json(user);
    },
    async update(req, res){
        const user = await user.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(user);
    },

    async destroy(req, res){
        const user = await user.findOneAndRemove(req.params.id);
        return res.send();
    }

};