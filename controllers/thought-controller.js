const { User, Thought } = require('../models');

const thoughtController = {

  getAllThoughts(req,res) {
    Thought.find({})
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
},
addThought(req, res) {
  Thought.create(req.body)
    .then((userData) => {
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        { $push: { thoughts: userData._id}},
        {new: true}
      )
    })
    .then(userData => res.json(userData))
    .catch(err => res.status(400).json(err));
},
    
}

module.exports = thoughtController;