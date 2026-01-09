# Image Node légère
FROM node:lts-alpine

# Installer un serveur HTTP simple pour servir du statique
RUN npm install -g http-server

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Construire l'application (ex: Vite → dist/)
RUN npm run build

# Port exposé
EXPOSE 8080

# Lancer le serveur HTTP
CMD ["http-server", "dist", "-p", "8080", "-a", "0.0.0.0"]
