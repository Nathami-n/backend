const express = require("express");
const router = express.Router();
const {getPeople, deletePerson, updatePeople, postPeople} = require('../controllers/people')
// router.get("/", getPeople);

// router.post("/postman", postPeople);
// //put method
// router.put("/:id", updatePeople);
// //delete method
// router.delete("/:id", deletePerson);
router.route('/').get(getPeople);
router.route('/postman').post(postPeople);
router.route('/:id').put(updatePeople).delete(deletePerson);

module.exports = router;
