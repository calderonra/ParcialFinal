const mongoose = require('mongoose');
const colorModel = require('../models/color');

const colorController = {};

colorController.create = function (req, res) {
    let data = {
        nombre: req.body.nombre,
        hexa: req.body.hexa
    };

    if (data.nombre && data.hexa ) {
        let colorNuevo = new colorModel(data)
        colorNuevo.save(function (err, guardado) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true ,message:"guardado con exito"});
            }
        });
    }else {
        res.status(400);
        res.json({err:{code: 400,message:"faltan datos"}});
    }
}

colorController.getAll = function (req, res) {
    colorModel.find({}, function (err, color) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true,message:"se obtienen a todos"});
        }
    });

}

colorController.getByid=function (req,res) {
    colorModel.findByOne({_id:req.params.id}, function (err, color) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true,message:"se obtiene al sujeto" });
        }
    });
}

colorController.delete=function (req,res) {
    colorModel.findOneAndRemove({_id:req.params.id},function (err,eliminado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true,eliminado });
        }
    })
}
colorController.update=function () {
    colorModel.findByIdAndUpdate({_id:req.params.id},function (err,actualizado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true,actualizado });
        }
    })
}

module.exports=colorController;