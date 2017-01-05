CREATE DATABASE freshtomatoes;
CREATE USER freshtomatoes@localhost IDENTIFIED BY 'freshtomatoes';
GRANT ALL PRIVILEGES ON freshtomatoes.* TO freshtomatoes@localhost;
FLUSH PRIVILEGES;