const { Router } = require("express");

const handlePlaylistSongs = require("./handlePlaylistSongs");

const router = Router();

router.use("/songs", handlePlaylistSongs);

module.exports = router;
