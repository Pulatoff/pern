const router = require("express").Router();
const controller = require("../controllers/categoryController");

router.route("/").get(controller.getAllCategory).post(controller.addCategory);
router
  .route("/:id")
  .get(controller.getOneCategory)
  .patch(controller.updateCategory)
  .delete(controller.deleteCategory);

module.exports = router;
