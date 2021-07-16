# MentorMatch

## Table of Contents

1. [Description](#Description)
2. [In Action](#In-Action)
2. [Background](#Background)
3. [Main Goals](#Main-Goals)
4. [Core User Features](#Core-User-Features)
5. [Stack](#Stack)
6. [Challenges](#Challenges)
7. [Reflections](#Reflections)
8. [Future Goals](#Future-Goals)
9. [Planning Resources](#Planning-Resources)
10. [Setup](#Setup)

## Description
MentorMatch is a simple, single-page survey designed to match up a software engineer with a mentor or mentee around the world. Users answer a variety of questions about their strengths and weaknesses, interests, time zone, and mentor/mentee designation to match them up with another user with similar interests. This project was created as a part of [Optimizely](https://www.optimizely.com/)'s 2021 Q2 Hack Days.

## In Action
![homepage](src/assets/page1.png?raw=true "page 1")
![homepage](src/assets/page2.png?raw=true "page 2")
![homepage](src/assets/page3.png?raw=true "page 3")

## Background
The purpose of MentorMatch is to match up [Optimizely](https://www.optimizely.com/) employees around the globe, from all offices, to increase collaboration outside of usual project teams and build a more cohesive, global community. There are many known benefits of mentorship in the workplace, such as: 
- professional learning and growth,
- greater job satisfaction and productivity,
- employee empowerment,
- boosting minority representation at the management level, and more.

Implementing a mentorship program at [Optimizely](https://www.optimizely.com/) is a great way to keep our employees engaged, productive and motivated, and would meaningfully improve our company culture.

## Main Goals
1. Learn Typescript.
2. Learn Redux and Redux-Saga.

## Core User Features
- Users should be able to navigate to the survey page.
- Users should be able to answer the survey questions.
- Users should see specific questions based on if they choose to be a “mentor” or a “mentee.”
- Users should not be able to submit the survey if all questions have not been answered. On the other hand, users should be able to successfully submit their survey questions if all questions have been answered.
- Users should receive a notification of submission after submitting the survey.

## Stack
<table>
  <tr>
    <td>Languages</td>
    <td><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
    <img alt="Typescript" src="https://img.shields.io/badge/typescript%20-%23323330.svg?&style=for-the-badge&logo=typescript&logoColor=%23F7DF1E"/>
    <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
    <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Frameworks & Libraries</td>
    <td><img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  </tr>
  <tr>
</table>

## Challenges
- This was my first attempt at learning Typescript. I didn't anticipate the learning curve to be very high since there is a lot of overlap between Javascript and Typescript. Although I was correct, I did not factor in the added challenge of learning Redux along with Typescript. Many times while debugging, I couldn't tell if the error messages I was getting were caused by Typescript or Redux compilation errors, so I ended up removing Redux to isolate the root cause of my errors.
- I also wanted to learn Redux-Saga for this project so I spent most of Day 2 setting up the Redux store. However, I later realized that Redux-Saga is mainly used for asynchronous operations, which I wasn't doing since I had run out of time to build out a backend system (API and database) for this application.

## Reflections
- I had a lot of ideas for this project that I was unable to implement due to the time constraints. Learning Typescript, Redux, and Redux-Saga took more time than I expected. At multiple points throughout the project, I was forced to reflect on the main goal I had set for myself: learn Typescript. After taking most of Day 2 to set up the Redux store, I decided that I needed to focus on producing a Minimum Viable Product (MVP), which led me to entirely removing Redux from the project on Day 3.
- I really enjoyed learning Typescript, because I was able to make a lot of connections between Javascript, my main programming language, and C#, which I am currently learning for my internship. As I researched and learned more about the benefits of Typescript, I started to see how powerful object-oriented programming (OOP) can be.
- I spent quite a bit of time on the first day planning and setting up the project (see [Planning Resources](#Planning-Resources) below). I usually find that taking the time to plan out the project structure, layout, schedule, etc. is helpful in terms of project setup and workflow. However, since this was only a three-day project, I think all the planning ended up taking up some useful time that I could have potentially spent on researching Typescript or implementing the other features I had hoped to finish.
 
## Future Goals
- Create a Node/Express server.
- Create a GraphQL API for the backend system.
- Create a matching algorithm to pair up users based on their survey answers while incorporating time zones.
- Expand the survey to allow users to find a “buddy” rather than a mentor/mentee.
- Deploy the app on an AWS EC2 instance and Docker container.
- Write tests.

## Planning Resources
- [Project Proposal](https://docs.google.com/document/d/1sXXjkWaoCERV-yV1g7NR-_5TsEtnW88SqaGlAjuL7hE/edit)
- [Kanban Board](https://insitesoft.atlassian.net/jira/software/projects/MATCH/boards/275)
- [Daily Schedule](https://docs.google.com/spreadsheets/d/1IcfjICIIbvXUIDiUfWuX__MDibgO9ARvIpfPs9ygUdA/edit#gid=606660407)
- [UI Wireframe](https://www.figma.com/file/U5ONPIUsNVR8wP4BkoHXDe/MentorMatch)

## Setup
1. Clone the repository:
```sh
git clone https://github.com/cindyryoo7/mentor-match.git
```
2. Navigate to the root directory of the repository:
```sh
cd mentor-match
```
3. Install dependencies:
```sh
npm install
```
4. Bundle and compile the frontend code:
```sh
npm start
```
5. View the client on the browser at the following address:
```sh
localhost:3000
```
