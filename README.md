# Interview Scheduler Project
My first React project, Interview Scheduler, is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Demos
* Creating an appointment:

!["Create appointment demo"](https://github.com/amyleblanc/scheduler/blob/master/docs/create_appointment.gif)

* Editing an appointment:

!["Edit appointment demo"](https://github.com/amyleblanc/scheduler/blob/master/docs/edit_appointment.gif)

* Deleting an appointment:

!["Delete appointment demo"](https://github.com/amyleblanc/scheduler/blob/master/docs/delete_appointment.gif)

## Setup

Install dependencies with `npm install`

## API Server

For sample data to run in the project, fork and clone the [scheduler-api] (https://github.com/lighthouse-labs/scheduler-api) into a new directory.

Follow the README.md instructions. This will involve a few steps, including:
* installing dependencies
* creating the database
* *seeding the database
* running the server

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
