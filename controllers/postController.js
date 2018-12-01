const mongoose = require('mongoose');
postModel = require('../models/post');

postController = {};

postController.create = function (req, res) {
    let data = {
        marca=req.body.marca,
        modelo=req.body.modelo,
        anno=req.body.anno
    }

    if (data.marca && data.modelo && data.anno) {
        let postNuevo = new postModel(data);
        postNuevo.save(function (err, guardado) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true });
            }
        });
    }
}

postController.getAll = function (req, res) {
    postModel.find({}, function (err, post) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true });
        }
    });

}

postController.getByid=function (req,res) {
    postModel.findByOne({_id:req.params.id}, function (err, post) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true });
        }
    });
}

postController.delete=function (req,res) {
    postModel.findOneAndRemove({_id:req.params.id},function (err,eliminado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true,eliminado });
        }
    })
}

module.exports=postController;