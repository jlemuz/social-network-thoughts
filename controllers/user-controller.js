const { User } = require('../models');

//Controller to perform the CRUD operations using Mongoose for the User model

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
        .populate({
          path: 'friends',
          select: '-__v'
        })
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
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

      addFriend({ params }, res) {
         User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { friends: params.friendId } },
              { new: true }
            )
            .then(userData => {
            if (!userData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
  
removeFriend({ params }, res) {
  User.findOneAndUpdate(
    { _id: params.userId },
    { $pull: { friends: params.friendId  }},
    { new: true }
  )
    .then(userData => res.json(userData))
    .catch(err => res.json(err));
}


}

//Exports to be imported to the user-routes file

module.exports = userController;