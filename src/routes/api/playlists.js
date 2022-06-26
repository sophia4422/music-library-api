const { Router } = require("express");

const playlistsSongs = require("./playlistsSongs");

const router = Router();

router.use("/:id", playlistsSongs);

module.exports = router;
