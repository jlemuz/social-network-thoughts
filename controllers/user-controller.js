const { User } = require('../models');

const userController = {

    getAllUser(req,res) {
        User.find({})
        .populate('friends')
        .then(userData => res.json(userData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    getUserById({params}, res) {
        User.findOne({ _id: params.id })
        .then(userData => {
            // If no pizza is found, send 404
            if (!userData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    addUser({ body }, res) {
        User.create(body)
          .then(userData => res.json(userData))
          .catch(err => res.status(400).json(err));
      },

      deleteUser({params}, res) {
          User.findOneAndDelete({_id: params.id})
          .then(userData => {
            // If no pizza is found, send 404
            if (!userData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },

      updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(userData => {
            if (!userData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch(err => res.status(400).json(err));
      },

}

module.exports = userController;