DROP DATABASE IF EXISTS music_db;

CREATE DATABASE music_db;

USE music_db;

CREATE TABLE playlists (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  artist VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  yearOfRelease INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE playlistSongs (
  id INT NOT NULL AUTO_INCREMENT,
  playlist_id INT NOT NULL,
  song_id INT NOT NULL,
  FOREIGN KEY (playlist_id) REFERENCES playlists(id),
  FOREIGN KEY (song_id) REFERENCES songs(id),
  PRIMARY KEY (id)
);