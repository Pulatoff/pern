const router = require("express").Router();
const controller = require("../controllers/brandController");

router.route("/").get(controller.getAllBrands).post(controller.addBrand);
router
  .route("/:id")
  .get(controller.getOneBrand)
  .patch(controller.updateBrand)
  .delete(controller.deleteBrand);

module.exports = router;
