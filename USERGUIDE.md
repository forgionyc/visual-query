<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="InstaYA Package Pickup Platform" />

&#xa0;

  <!-- <a href="https://instayapackagepickupplatform.netlify.app">Demo</a> -->
</div>

<h1 align="center">VisualQuery</h1>

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

Hey!, welcome to VisualQuery Alpha, VisualQuery it is a web app that helps you to visualize data from google BigQuery big data tables:


## Login

When you go to our Webpage, the first thing youre gonna see, is our landing page, here you can create an user, or if you have one, you can login into the application, no passwords needed =).
![image](https://github.com/forgionyc/visual-query/assets/109704682/130d9746-78a7-4a7e-b895-bbd3b634398a)

## Dashboard

After you login, this is the first view you gonna have, our dashboard, here you can build charts based on bigquery data with just some clicks =), you can select the indicator you wanna see data about, choose from a list of countries and years specifics to that data, you can either do one choice or multiple choice, you need to feed all the selections or the chart will not run =0(we are gonna fix that in the beta :$), you can also save the query you choosed to do the chart and save it into our database or queries.
![image](https://github.com/forgionyc/visual-query/assets/109704682/79773512-bce2-4e0a-b9e1-456dd1f71a2e)


## My saved queries

Here you can see your own queries that are saved on the database, select one and run that saved query.
![image](https://github.com/forgionyc/visual-query/assets/109704682/bf11bc79-c84f-4b36-93a7-b897ddb464fb)


## All saved queries

Here you can see all the VisualQuery saved queries, comment on other people queries and run their queries. 
![image](https://github.com/forgionyc/visual-query/assets/109704682/de73d13a-6357-44f3-8d20-dc5b118549d8)


## DataExplorer

And finally in this one you can see the biggest data table on the data set world education, so you can explore in depth the indicators, it pages about 200 results per page, is something slow, but hoping to optimize that =)
![image](https://github.com/forgionyc/visual-query/assets/109704682/02a5e9ed-85b3-442a-aa25-50c5fd45df41)


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
$ git clone https://github.com/forgionyc/visual-query

# Access
$ cd visual-query

# Build the docker images for the backend and the frontend
$ docker compose up -d

# Run the project
$ docker compose run visual-query

# The server will initialize in the <http://localhost:9000> for the frontend and <http://localhost:8000> for the backend
```

## :memo:

## LINK YOUTUBE: https://youtu.be/nJkGY_d2kA0


Made with :heart: by <a href="https://github.com/forgionyc" target="_blank">Carlos Forgiony</a>

&#xa0;

<a href="#top">Back to top</a>
