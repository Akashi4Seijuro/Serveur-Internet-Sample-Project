# Image de base
FROM mariadb:latest

ENV MARIADB_DATABASE=tasksdb

# Mot de passe root par défaut (sera écrasé au runtime)
ENV MARIADB_ROOT_PASSWORD=5trongD3faultP4ss!

# Copier le script d'initialisation de la base de données
COPY init.sql /docker-entrypoint-initdb.d/

# Expose le port MariaDB
EXPOSE 3306
