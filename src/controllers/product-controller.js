'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({active: true}, 'title price slug')
        .then(x => {
            res
                .status(200)
                .send(x);
        })
        .catch(e => {
            res
                .status(400)
                .send(e);
        });

};

exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id, 'title price slug')
        .then(x => {
            res
                .status(200)
                .send(x);
        })
        .catch(e => {
            res
                .status(400)
                .send(e);
        });

}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            res
                .status(201)
                .send({
                    message: 'Produto cadastrado com sucesso!'
                });
        }).catch(x => {

            res
                .status(400)
                .send({
                    message: 'Falha ao cadastrar produto',
                    data: x
                });
        });

};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res
        .status(200)
        .send({
            id: id,
            item: req.body
        });
};

exports.delete = (req, res, next) => {
    res
        .status(20)
        .send(req.body);
};