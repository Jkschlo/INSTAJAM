CREATE DATABASE instajam;
CREATE USER postgres WITH ENCRYPTED PASSWORD 'instajam';
GRANT ALL PRIVILEGES ON DATABASE instajam TO postgres;
GRANT CONNECT ON DATABASE instajam TO postgres;
\C instajam postgres

CREATE TABLE post (id SERIAL PRIMARY KEY, title, VARCHAR, body TEXT, link TEXT);

INSERT INTO post
    (title, body, link);
VALUES
    ('title', 'body', 'link');

/* insert for the save posts  */
INSERT INTO savePost (title, body, link)
VALUES (req.body.title, req.body.body, req.body.link);