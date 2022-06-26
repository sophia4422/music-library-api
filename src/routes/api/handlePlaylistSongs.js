const { Router } = require("express");

const router = Router();

router.post("/", addSongToPlaylist);
router.delete("/:songId", deleteSongFromPlaylist);

module.exports = router;
