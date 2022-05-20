const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

  router
  .route('/:id/reactions')
  .post(addReaction)

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

  
module.exports = router;