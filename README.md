# Frontend del Proyecto de Rick y Morty

Este proyecto de frontend permite la consulta de la API de Rick y Morty para presentar información detallada sobre personajes, ubicaciones y episodios, los usuarios tienen la capacidad de añadir personajes a una lista de favoritos, la cual se almacena en la memoria caché mediante el uso de Redux. Las solicitudes a la API se gestionan a través de Axios, además, el proyecto se integra con un servidor backend que almacena los personajes favoritos en una base de datos MySQL.

## Requisitos previos

- Node.js
- NPM

## Instalación

- npm install

### Información adicional de instalación de dependencias (Opcional):

- npm install react-router-dom axios @reduxjs/toolkit react-redux redux-persist

- npm install axios

## Ejecutar el proyecto:

- npm start

# Backend para Proyecto de Rick y Morty

Este es un proyecto backend que permite almacenar personajes de la API de Rick y Morty en una base de datos MySQL. El servidor está construido con Node.js y utiliza Express.js como framework, con MySQL2 como cliente de base de datos.

## Requisitos previos

- Node.js
- MySQL
- MySQL Workbench (opcional, para visualizar la base de datos)
- NPM
- crea la tabla con: CREATE DATABASE rick_morty_db;

## Instalación

- npm install (Se instala lo que se necesita)

### Información adicional de instalación de dependencias (Opcional):

- npm init -y
- npm install express mysql2 cors

## Ejecutar el proyecto:

- npm start
