<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="InstaYA Package Pickup Platform" />

&#xa0;

  <!-- <a href="https://instayapackagepickupplatform.netlify.app">Demo</a> -->
</div>

<h1 align="center">InstaYA Package Pickup Platform</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/forgionyc/Visual-Query?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/forgionyc/Visual-Query?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/forgionyc/Visual-Query?color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/forgionyc/Visual-Query?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/forgionyc/Visual-Query?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/forgionyc/Visual-Query?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/forgionyc/Visual-Query?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  InstaYA Package Pickup Platform 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/forgionyc" target="_blank">Author</a>
</p>

<br>

## :dart: About

Designed and developed a dashboard app for the velezreyez fellowship, the platform consist of a backend developed with FastApi, a mysql database and a frotend developed in reactjs with ts using the chakra-ui library, it was developedd with microservices architecture in mind, it feautures a GUI that allows users to select data from a bigquery database, abstracting all the sql language, users can se a graphical representation of his data, save his favorite queries, comment on other users queries and see all the queries on the database, user can also explore the most important table of the database with pagination, the app counts with multiplayer functionality and persistence.

Login
![image](https://user-images.githubusercontent.com/113073942/204686590-4adba4de-e26b-4d17-9458-c2be1dba0c02.png)

Visualización ordenes creadas
![image](https://user-images.githubusercontent.com/113073942/204686487-f4351ed5-47d2-4ac8-9d50-1f6b7bb0b29f.png)

Creación de orden
![image](https://user-images.githubusercontent.com/113073942/204686649-b687d006-685c-48b3-8baf-b7c933b938b5.png)

## :rocket: Technologies

The following tools were used in this project:

- [React](https://react.dev/)
- [Python](https://www.python.org/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Docker](https://www.docker.com/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/forgionyc/Visual-Query

# Access
$ cd Visual-Query

# Build the docker images for the backend and the frontend
$ docker build -t backend/instaya . y docker build -t frontend/instaya .

# Run the project
$ docker run -d -p 5000:5000 backend/instaya y docker run -d -p 3000:3000 frontend/instaya

# The server will initialize in the <http://localhost:3000> for the frontend and <http://localhost:5000> for the backend
```

## :memo:

Made with :heart: by <a href="https://github.com/forgionyc" target="_blank">Carlos Forgiony</a>

&#xa0;

<a href="#top">Back to top</a>
