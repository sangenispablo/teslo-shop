<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Teslo API
1. Clonar el proyecto
2. Instalar los paquetes 
```
yarn install
```
3. Duplicar el archivo 
```
.env.template 
``` 
y renombrar a 
```
.env
```
4. Completar las variables de entorno
5. Levantar la BD de PostgreSQL en Docker
```
docker-compose up -d
```
6. Si quiere generar datos puede usar el siguiente endpoint para generar los datos de prueba
```
http://localhost:3000/api/seed
```
7. Levantar en dev con 
```
yarn start:dev
```