# PokeDex

Proyecto web desarrollado con Angular y Angular Material para la materia de Desarrollo de Software Frontend II.

La aplicación está inspirada en la Pokédex clásica de Pokémon. Permite buscar Pokémon por nombre o número, visualizar su imagen e información básica y navegar entre ellos con los botones Anterior y Siguiente.

## Tecnologías utilizadas

- Angular 22
- Angular Material
- TypeScript
- HTML y CSS
- Media Queries para el diseño responsivo

## Requisitos

El proyecto fue desarrollado en Windows, utilizando las siguientes versiones:

- Node.js: v22.22.3
- npm: 10.9.8
- Git: para clonar el repositorio.

## Instalación y ejecución

1. Clonar el repositorio

Abrir una terminal de PowerShell o la terminal de Visual Studio Code y ejecutar:

```bash
git clone https://github.com/Mictte/pokedex.git
```

2. Entrar a la carpeta del proyecto

cd pokedex

3. Instalar las dependencias

npm install

Este comando instalará las dependencias de Angular y Angular Material necesarias para ejecutar el proyecto.

4. Ejecutar la aplicación

npm start

Una vez iniciado el servidor, abrir en el navegador:

http://localhost:4200/

Para detener el servidor, presionar
Ctrl + C
en la terminal.

## Funcionamiento actual

Para el primer avance se utilizaron tres Pokémon de prueba: Bulbasaur, Ivysaur y Venusaur.

Sus datos están definidos directamente en el proyecto para comprobar el funcionamiento del buscador, los componentes y los botones de navegación.

Las imágenes se obtienen desde el repositorio de sprites de PokéAPI, por lo que se necesita conexión a internet para visualizarlas.

En el siguiente avance se implementará un servicio Angular para consultar directamente PokéAPI.

## Referencia del diseño

La interfaz se desarrolló tomando como referencia una Pokédex publicada por melisaim en CodePen. Se adaptó su estilo visual a nuestro proyecto Angular, incorporando componentes propios y ajustes para pantallas de diferentes tamaños.

Diseño de referencia: https://codepen.io/melisaim/pen/ZJKmMK

## 6.2 Avance 2: Bitácora – Progreso funcional del proyecto

## Funcionamiento actual

En el segundo avance se integró PokéAPI mediante un servicio de Angular, utilizando HttpClient para realizar las consultas.

La aplicación permite buscar Pokémon por nombre o número, mostrando su imagen, tipos, altura y peso. También cuenta con botones para navegar entre Pokémon y mensajes de error cuando no se encuentra el que se está buscando.

Los datos se obtienen directamente de PokéAPI, por lo que es necesario contar con conexión a internet para utilizar la aplicación.

La interfaz conserva el diseño responsivo del primer avance y se adapta a computadoras y dispositivos móviles.

## Integrantes

- Castro Romero Roberto Daniel
- Mondragón Nieto Yolanda Karina

Proyecto realizado en equipo para la materia Desarrollo de Software Frontend II.
