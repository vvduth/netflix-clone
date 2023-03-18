# FullStack Netflix Clone

![pic1](pic1.png)

This is a full-stack web application that aims to clone some of the most important functionalities of Netflix. This application was built using React, NextJS, TailwindCSS, and Prisma, and it includes the following features:

- Environment, Typescript, NextJS Setup
- MongoDB & Prisma connect, Database creation
- Authentication with NextAuth, Google & Github Login
- Full responsiveness on all pages
- Cookie-based authentication
- API and Controllers creation
- Detail-oriented effects and animations using TailwindCSS
- React SWR data fetching
- Zustand state management

## Getting Started

- To get started with this application, you will need to have NodeJS and npm (or yarn) installed on your machine. You will also need to have a MongoDB database up and running, and you will need to configure the `DATABASE_URL` environment variable with the connection string for your MongoDB database.

- After cloning the repository, you can install the dependencies by running the following command:

`npm install`
or

`yarn install`




- You will also need to create a `.env.local` file at the root of the project with the following variables:

`DATABASE_URL=<your-mongodb-connection-string>` <br>
`NEXTAUTH_URL=http://localhost:3000` <br>
`GOOGLE_ID=<your-google-oauth-id>`<br>
`GOOGLE_SECRET=<your-google-oauth-secret>`<br>
`GITHUB_ID=<your-github-oauth-id>`<br>
`GITHUB_SECRET=<your-github-oauth-secret>`




- Once you have everything set up, you can run the application in development mode by running:

`npm run dev`
or

`yarn dev`



- This will start the application on `http://localhost:3000`.

## Features

### Environment, Typescript, NextJS Setup

- This application was built using NextJS, which is a framework for building server-side rendered React applications. It also includes a Typescript configuration to ensure type safety throughout the codebase.

### MongoDB & Prisma connect, Database creation

-- This application uses MongoDB as the database, and Prisma to interact with it. The Prisma schema can be found in the `prisma/schema.prisma` file, and the database can be created by running the following command:

`npx prisma migrate dev --name init`



- This will create the database and run the initial migration.

### Authentication with NextAuth, Google & Github Login

- -This application uses NextAuth to handle authentication, and it includes support for Google and Github login. To configure the authentication providers, you will need to set the `GOOGLE_ID`, `GOOGLE_SECRET`, `GITHUB_ID`, and `GITHUB_SECRET` environment variables.

### Full responsiveness on all pages

 - This application was built with responsiveness in mind, and it includes support for different screen sizes and orientations.

### Cookie-based authentication

- This application uses cookie-based authentication to keep the user logged in across different pages.

### API and Controllers creation

- This application includes several API routes and controllers to handle requests from the client side. These routes are located in the `pages/api` directory.

### Detail-oriented effects and animations using TailwindCSS

- This application uses TailwindCSS to style the components, and it includes several detail-oriented effects and animations to enhance the user experience.

### React SWR data fetching

- This application uses React SWR to fetch data from the server, and it includes support for caching and automatic revalidation.

### Zustand state management

- This application uses Zustand to manage the state of the application, and it includes several stores to handle different parts of the application state.

## Deployment

- This application is deployed on Vercel, and you can access it at the following [URL](https://netflix-clone-nine-black.vercel.app/)
