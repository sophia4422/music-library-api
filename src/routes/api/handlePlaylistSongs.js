const { Router } = require("express");

const {
  addSongToPlaylist,
  deleteSongFromPlaylist,
} = require("../../controllers/api/handlePlaylistSongs");

const router = Router();

router.post("/", addSongToPlaylist);
router.delete("/:songId", deleteSongFromPlaylist);

module.exports = router;
