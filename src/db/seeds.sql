USE music_db;

INSERT INTO playlists (title)
VALUES 
("Drive"), 
("Workout"), 
("Relax");

INSERT INTO songs (title, artist, genre, yearOfRelease)
VALUES
("Yellow", "Coldplay", "Pop", 2010),
("Blue", "Warmplay", "Classical", 2000),
("Pink", "Warmplay", "Pop", 2011),
("Green", "Bob Smith", "Indie", 2020),
("Orange", "Alice Smith", "Indie", 2014),
("Black", "Foo Bar", "Rock", 2000);

INSERT INTO playlistSongs (playlist_id, song_id)
VALUES
(1, 2),
(1, 4),
(2, 1),
(2, 4),
(2, 3),
(3, 2);
