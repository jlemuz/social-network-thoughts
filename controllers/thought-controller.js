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
getThoughtById({params}, res) {
  Thought.findOne({_id: params.id })
  .then(thoughtData => {
      // If no pizza is found, send 404
      if (!thoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(thoughtData);
    })
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

updateThought({ params, body }, res) {
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(thoughtData => {
      if (!thoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(thoughtData);
    })
    .catch(err => res.status(400).json(err));
},

deleteThought({params}, res) {
  Thought.findOneAndDelete({_id: params.id})
  .then(thoughtData => {
    // If no pizza is found, send 404
    if (!thoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thoughtData);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
},
    
}

module.exports = thoughtController;