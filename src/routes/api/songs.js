const { Router } = require("express");

const router = Router();

const { getSongs, getSong } = require("../../controllers/api/songs");

router.get("/", getSongs);
router.get("/:songId", getSong);

module.exports = router;
