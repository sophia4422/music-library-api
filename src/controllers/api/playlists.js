const getPlaylists = (req, res) => {
  return res.send("getPlaylists");
};

const getPlaylist = (req, res) => {
  return res.send("getPlaylist");
};

const createPlaylist = (req, res) => {
  return res.send("createPlaylist");
};

const updatePlaylist = (req, res) => {
  return res.send("updatePlaylist");
};

const deletePlaylist = (req, res) => {
  return res.send("deletePlaylist");
};

module.exports = {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
};
