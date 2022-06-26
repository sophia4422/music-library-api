const { Router } = require("express");

const playlists = require("./playlists");
const songs = require("./songs");

const router = Router();

router.use("/playlists", playlists);
router.use("/songs", songs);

module.exports = router;
