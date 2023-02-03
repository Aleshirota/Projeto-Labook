-- Active: 1674684971134@@127.0.0.1@3306
CREATE TABLE users (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email  TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE posts (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  creator_id TEXT NOT NULL,
  content TEXT NOT NULL,
  likes INTEGER NOT NULL,
  dislikes INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (creator_id) REFERENCES users (id)
);

CREATE TABLE likes_dislikes (
  user_id TEXT NOT NULL,
  post_id TEXT NOT NULL, 
  like INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (post_id) REFERENCES posts (id)
);

INSERT INTO users (id, name, email, password, role, created_at)
VALUES
	("u001", "Fulano", "fulano@email.com", "fulano123", "Analista","12/12/2023"),
	("u002", "Beltrana", "beltrana@email.com", "beltrana00", "Juridico","24/08/2020");

  INSERT INTO posts (id, creator_id, content, likes, dislikes, created_at, updated_at)
VALUES
	("p001","u001","Hoje vou estudar POO!",1, 4,"2023-01-20T12:11:47:000Z", "2023-01-20T13:11:47:000Z"),
	("p002","u002","Hoje vou viajar",3, 2,"2023-01-20T12:11:32:000Z", "2023-01-20T13:12:47:000Z"),
  ("p003","u002","Vou pra casa da minha mãe",3, 2,"2023-01-20T12:11:32:000Z", "2023-01-20T13:12:47:000Z"),
  ("p004","u002","Hoje vou viajar para Bahia",3, 2,"2023-01-20T12:11:32:000Z", "2023-01-20T13:12:47:000Z");

  INSERT INTO likes_dislikes (user_id, post_id,like)
VALUES
	("u001", "p001",4),
	("u002", "p002",1),
	("u001", "p003",2),
	("u002", "p003",3);

  SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM likes_dislikes;

DROP TABLE users;
DROP TABLE posts;
DROP TABLE likes_dislikes;