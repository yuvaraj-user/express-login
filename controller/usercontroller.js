const model = require("../models/indexmodel.js");
const { orm } = require("sequelize");
const controller = {};
controller.getAll = async function (req, res) {
    try {
       const userData = await model.user.findAll();
       res.render('../views/users/list',{data : userData});
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.user_form = async function(req,res) {
    try {
        if(req.params.id) {
            const user = await model.user.findByPk(req.params.id)
            // res.render('../views/users/edit',{data : user,id:req.params.id});
            res.status(200).json({user});
        } else {
            res.render('../views/users/add');
        } 
    } catch(error) {
        res.status(404).json({ message: error });
    }
}

controller.add_user = async function(req,res) {
    try {
        const user = await model.user.create(req.body);
        // if(user) {
        //     res.redirect("/");
        // }
        res.status(200).json({ message: "Users details added successfully." });
    } catch(error) {
        res.status(404).json({ message: error });
    }

}

controller.edit_user = async function(req,res) {
    try {
        const user = await model.user.create(req.body);
        if(user) {
            res.redirect("/");
        }
    } catch(error) {
        res.status(404).json({ message: error });
    }

}

controller.update_user = async function(req,res) {
    try {
        const user = await model.user.update(
            req.body,
            {
                where:{ id: req.params.id }
            }
        );
    
        if(user) {
            res.redirect("/");
        }
    } catch(error) {
        res.status(404).json({ message: error });
    }

}

controller.delete_user = async function(req,res) {
    try {
        if(req.for == 'multi_delete') {
            const user = await model.user.destroy(
                {
                    where:{ id: req.body.ids }
                }
            );
        } else {
            const user = await model.user.destroy(
                {
                    where:{ id: req.params.id }
                }
            );
        }
    
        if(user) {
            res.redirect("/");
        }
    } catch(error) {
        res.status(404).json({ message: error });
    }

}

controller.multi_delete = async function(req,res) {
    try {
        const user = await model.user.destroy(
            {
                    where:{ id: req.body.ids }
            }
        );
    } catch(error) {
        res.status(500).json({ message: error });
    }

}

module.exports = controller;
