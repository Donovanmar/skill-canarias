# APP_NAME



# 1. Prerequisitos

- WSL 2 (Para usuarios de Windows)
- Git
- Docker
- Docker Compose
- Visual Studio Code (o cualquier IDE que te permita trabajar en contenedores dockers)


# 2. Resumen de Dockers
- [Nginx](https://hub.docker.com/_/nginx/) (Se usa como reverse proxy y nos permitirá enrutar a los servicios de la red interna de dockers)

- [node-envsubst](https://hub.docker.com/repository/docker/jraicr/node-envsubst/general) (Contiene la aplicación javascript del Front)

|   Servicio    | Puerto |
|---------------|--------|
| Frontend APP  |   80   |


# 3. ¿Cómo empezar a trabajar en este repositorio?

## 3.1 Clona el repositorio 
```sh
git clone https://github.com/Donovanmar/skill-canarias
```

## 3.2 Configura las variables de entorno
En primer lugar debemos añadir al final de nuestro archivo ```.bashrc``` las siguientes líneas: 

```sh
export UID="$UID"
export USERNAME="$USER"
export PWD="$PWD"
```

Por último hay que copiar el archivo ubicado en ```dockers/.example.env``` a ```dockers/.env```

## 3.3 Abre el proyecto en un contenedor
Si estamos en WSL debemos ir hasta la ruta de nuestro proyecto y ejecutamos code.

```sh
cd ~
cd git/skill-canarias
code .
```

Para levantar todos los contenedores desde VSCode podemos hacer click derecho al archivo docker-compose.yml y seleccionar la opción `Compose Up`.

Alternativamente podemos abrir una terminal y escribir el comando:
```sh
docker compose -f "dockers/docker-compose.yml" up -d --build 
```

Una vez arrancados los contenedores, podemos pulsar `F1` y escribimos `Attach to running container` y a continuación nos preguntará a que contenedor queremos conectar y le indicaremos `skill-canarias_frontend`. En este momento se abrirá una nueva instancia de VSCode cargando el proyecto en el interior del contenedor que has seleccionado. 

## APP Requisitos


## Plataforma

La aplicacion front es node JavaScript en forma de microservicio
El middleware es una API de Laravel que se estructura por clases
La aplicación estaría almacenada en una base de datos MySQL

La aplicacion final debera tener 3 componentes, 2 en Docker: Front, Middle y la DB en un servidor.

CICD: La aplicacion conterinizado debera desplegarse usando el repositorio de GITHUB la rama MASTER. 