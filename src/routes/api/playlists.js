const { Router } = require("express");

const playlistsSongs = require("./playlistsSongs");

const {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("../../controllers/api/playlists");

const router = Router();

router.get("/", getPlaylists);
router.get("/:playlistId", getPlaylist);
router.post("/", createPlaylist);
router.put("/:playlistId", updatePlaylist);
router.delete("/:playlistId", deletePlaylist);
router.use("/:playlistId", playlistsSongs);

module.exports = router;
