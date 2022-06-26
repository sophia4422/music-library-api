const { Router } = require("express");

const router = Router();

router.get("/", getSongs);
router.get("/:songId", getSong);

module.exports = router;
