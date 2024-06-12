const express = require("express");
const {
  handlegetallprojects,
  handlegetprojectsbyid,
  updateprojectbyid,
  deleteprojectbyid,
  addproject,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handlegetallprojects);
router.post("/", addproject); // Added POST route here for creating projects

router
  .route("/:id")
  .get(handlegetprojectsbyid)
  .patch(updateprojectbyid)
  .delete(deleteprojectbyid);

module.exports = router;
