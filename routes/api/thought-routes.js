const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought
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

module.exports = router;