CREATE DATABASE dburl;

CREATE TABLE urls(
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_normal VARCHAR(245),
    url_encurtada VARCHAR(245),
    code VARCHAR(10)
);