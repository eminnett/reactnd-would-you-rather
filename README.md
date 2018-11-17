# Would You Rather?
## React & Redux Project
#### React Nanodegree (Udacity)
Project submission by Edward Minnett (ed@methodic.io).

November 17th, 2018. (Revision 1)

----------

## Overview

This is the final assessment project for Udacity's React & Redux course. The goal of the project is to demonstrate an understanding of the Redux Javascript framework, how to use it in conjunction with the React javascript framework, and the best practices for the use of React and Redux when building single page applications.

The project takes the form of the well known "Would you rather?" binary choice game. Participants are able to do the following while using the application:

- View questions they have answered.
- View questions they have not yet answered.
- Create new questions.
- View a leaderboard ranking users by the sum of the questions they have answered and created.

For the sake of simplicity and because this is just a demo application, the application doesn't include a true authentication user journey. Instead, there is a choice of three users who can be selected from a drop-down list when 'logging in'. The current user can be changed by 'logging out' and selecting a different user from the dropdown.

This application uses a fake database (`/src/utils/_DATA.js`) provided by Udacity as a way to pre-populate the application's data store. Changes made to the data store are then cached via local storage to persist the application's state.

## Setup

To run the application, clone the project to a local directory and execute the following:

* install all project dependencies with `npm install`
* start the development server with `npm start`

The application will then be available at `http://localhost:3000/`.

## References & Sources

The following sources were used as reference while working on this project:

- https://github.com/udacity/reactnd-redux-todos-goals
- https://github.com/udacity/reactnd-chirper-app
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://css-tricks.com/creating-yin-yang-loaders-web/
- https://stackoverflow.com
- https://developer.mozilla.org
- https://reacttraining.com/react-router
- https://reactjs.org/docs/
- https://tylermcginnis.com
- http://colormind.io/

The three avatar images used for this project came from Dmitriy Bondarchuk's flat avatars project:
- https://www.behance.net/gallery/47035405/Free-avatars-flat-icons
The license for these avatars as found on the Behance page is described as "Attribution, Non-commercial, No Derivatives".
