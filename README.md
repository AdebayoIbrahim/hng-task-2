## Stage2 task For the hng internship

#### This is the first version featuring generating popular movies their details and release date, Search functionality and more..

#### More Feature will be available on this later like adding to favourites watch trailers and more  BUT this will end here for submission purposes and not to exceed submission deadline
STAGE 2 TASK
Objective
Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.
Requirements
1. User Interface:
Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
You should list the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters.
The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]
2. Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
3. Movie Details:
When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
API Integration:
Consume the TMDB API to fetch movie data.
Use the following API endpoints:
Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
Submission:
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.
This frontend challenge requires you to build a dynamic movie discovery app that interacts with a real API to fetch and display movie data.
PS: You MUST use react or  Next js
Submit your task through the designated submission form.
Submission Deadline:
The deadline for submissions is 14th September 2023, 11:59 PM GMT. Late submissions will not be entertained.
Link to submission form again: https://docs.google.com/forms/d/e/1FAIpQLSf-oxF8XvHCuCiBg3ktBxuNxk2tPk2SQq_-02sx7TBQlBd7Xg/viewform
PPS: THE API MIGHT NOT RETURN ALL THE INFO ON THE SECOND PAGE OF THE DESIGN, ADD THE ESSENTIAL ONES THAT ARE LISTEN ABOVE. THE SIDEBAR DOESN'T NEED TO BE FUNCTIONAL.


YOU MAY USE ANY CSS FRAMEWORK/LIBRARY OF YOUR CHOICE (edited) 
The Movie Database (TMDB)The Movie Database (TMDB)
Getting Started
Welcome to version 3 of The Movie Database (TMDB) API. This is where you will find the definitive list of currently available methods for our movie, tv, actor and image API.
## Runnin on local machine

#### clone the repo ```https://github.com/AdebayoIbrahim/hng-task-2.git``` 
#### to install packages,
cd into the root folder and run ```npm i``` 
#### to install
### run on local server ```npm start```
## URL(https://movie-pot.netlify.app/)
