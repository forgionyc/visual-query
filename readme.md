For this part of the application, you will need to get creative! This is an open ended challenge, with a few constraints, and some required features. You will be assigned a read-only public data set in Google Cloud BigQuery. Typically these data sets contain multiple tables, each with 20 to 50 million rows. The exact features and purpose of this app are up to you, but they will likely be determined by the data set you will be working with. We require certain features in order to give the challenge structure, ensure that certain necessary skills are being demonstrated, and create a standard objective baseline to judge and compare applicants. Beyond those features (listed below), unlike the first challenge, where you want to take this is up to you!
Requirements
Your application will be composed of a minimum of these components:

- The assigned BigQuery read-only database.
- A graphical web frontend written in Javascript or Typescript.
- Use React framework.
- A backend written in Python
- you should use either Flask or FastAPI.
- Your own read-write database. This can be either by MySQL. This is where you will store all state specific to your application.
- A Docker compose file that runs the application.
- It should run a minimum of 3 containers: your frontend, your backend, and a database.

We are requiring specific programming languages, frameworks, and databases for consistency, and because they are heavily used in the Cloud Computing industry. Your submission will be evaluated against a rubric that considers code maturity and industry best practices. This project is structured to highlight your ability to produce great professional-grade software.  
This table summarizes choices of languages, databases, and frameworks. Please keep in mind that you are not limited to these– you may use other libraries and frameworks such as SQLAlchemy (an ORM), or templating engines like mustache.

DATABASE: MySQL
BACKEND: FastAPI or Flask
FRONTEND: React

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## User Stories

While much of what the app does is up to you to decide, it must support the below features. These features are described as user stories. A user story is a short description of a task or goal the user wants to accomplish, and why they would want to do that.
The story does not describe specifics about how the user accomplishes this goal, or what the user interface is, unless it is critical to the goal. In the world of professional enterprise software development, feature specifications are first written as user stories. The details of how the user interface works, and often specifics about how the user accomplishes the goal, are not given. That way the what and why are separated from the how. This gives developers and designers more freedom to come up with creative solutions to help users accomplish their goals. Isolating the why and the what from the how also makes it easier to see what is a bug or not, because the intention of the feature is written out very explicitly, with no added information. In this case, the how must be determined by you! You should read this short description of how user stories are part of the development process here.
Note that while these user stories are a minimum of the features you should implement, the main focus of the application is still up to you. You can implement additional features, or design these features in such a way that the user is guided to some other kind of goal. At the end of the day, the user might never know there was ever a story called ‘visual query builder!’ That is a background detail, just like we don’t know all of the names of the stories that went into designing the Windows start menu, or the Github repository view.

# Visual Query Builder

As a user, I want to be able to build a query without writing any SQL. I should be able to use a combination of checkboxes (for boolean fields), drop down menus, and textboxes in order to specify a query for the data. The exact graphical elements will be determined by what the data set is about.
For instance, on Mercado Libre, you can filter by different price ranges, the used or new condition of objects, and the shipping speed using sliders and check boxes. These are UI filters that can help bound a set of search results.
Google also supports boolean logic (although it’s really just for super users!) and you can read more about it here. These two references are just to give you an idea of what’s possible when it comes to web interfaces and search!
It is not necessary to represent every field or table in the query builder. In fact, that would make the query builder difficult to use! Choose a single use case and limit yourself to six fields or less.
It may make sense for this query builder to perform joins across multiple tables. However, I do not want to be aware of this detail. The purpose of the visual query builder is to be an intuitive interface and hide unnecessary implementation details from the user.
I want to be able to press a button marked “Run Query” to fetch the data based on my graphical input. The query should only be run when I press the button.

# Visual Summary of Queried Data

As a user, I want to see a graphical representation after I run a query, so I can quickly understand the data.
This visualization can be any picture, like a line graph, bar graph, pie chart, or something else. It may make sense for the visualization to be multiple pictures.
Be creative! Make it pretty!

# Save Query With Name, Username, and Comment

As a user, I want to be able to save a query created in the visual query builder, so that I can come back to it later, or so that other people can use it.
I want to be able to give the query a name, and a comment. When it is saved, my username should be recorded.
Note: You do not need to build login and password functionality. However, the user should be able to specify their username somewhere while using the app.

# Show All Saved Queries

As a user, I want to be able to see a list of all of the saved queries. This list should be able with the columns: name, comment, and the username that created it.

# Comment on Query

As a user, I want to be able to comment on other user’s queries, so that I can collaborate on data exploration. The comment should appear with my username below the description of the query in the list of all saved queries.

# Select Saved Query

As a user, I should be able to select a saved query from the list of saved queries, so I can come back to my work later. When I select a query, it should be loaded into the visual query builder.

# Persistence

As a system administrator, I want to be able to shut down the application and boot it back up again with all data, such as saved queries, restored. My system should be able to suffer a power outage with no loss of data.

# Multiplayer Functionality

As a system owner, I want two or more separate users, with two separate usernames, to be able to use the app at the same time, so I can support more data exploration.
