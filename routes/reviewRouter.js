const router = require("express").Router();
const controller = require("../controllers/reviewController");

router.route("/").get(controller.getAllReview).post(controller.addReview);
router
  .route("/:id")
  .get(controller.getOneReview)
  .patch(controller.updateReview)
  .delete(controller.deleteReview);

module.exports = router;
