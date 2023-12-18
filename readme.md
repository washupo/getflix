# "GetFlix" project

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
This project was a challenge by team of four during our training at beCode in Bruxelles.
In this exercise we create a Streaming site (in html / css, javascript and Node.js) inspired by Netflix, Amazon Prime Video and other Popcorn Time, Stremio ... The goal is to display a catalog of movies. Spot the similarities between these platforms (navbar, header, search tool, different categories of videos…).

![image](https://github.com/neb244/getflix/assets/133639183/d48ed448-bcc9-47e8-992f-853b590fbed1)


<hr/>

## Authors
* Pauline
* Zineb
* Prescillia
* Julie

### 🍿 Features 

- Search and watch movies trailers: users can search for movies by title and can watch the trailer easily
- Genre-wise display: movies can be sorted by genre
- Trending Movies: displays a section for trending movies
- Upcoming movies: displays a section for upcoming movies
- Movie Details: users can view detailed information about each movie

<hr/>

# 🍿 Demo 

##  Check out our live demo at https://chillhome-znov.onrender.com

<img src="https://github.com/washupo/getflix/assets/133639183/87f3f7d5-93fc-458c-b12a-f23dd06d9af8" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/c56c1d85-0394-4d38-8340-cb0286858c1d" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/5ce744b5-5bc2-4e55-a303-2b70e68ec6ad" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/aaf16ba9-1980-4160-8cb9-fb5befdc7f90" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/918c41a3-7823-45f9-a366-56b80426447c" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/c1302e6f-e9ee-423e-b79d-5a8a8c2befd1" width="200" height="100">
<img src="https://github.com/washupo/getflix/assets/133639183/08ac1762-35e2-4549-929e-1e0d804a13fc" width="200" height="100">


> ## 🍿 Technology

The website is built using the following technologies:

- ReactJS
- TMDB API
- Node Js
- Mui
- Vite

>> #### API

We used the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)

<hr/>

# 🍿 How to Run the Website on Your System:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/washupo/getflix.git
   ```

2. Install project dependencies:

   ```bash
   cd frontend && npm install && cd ../backend && npm install
   ```
3. Environment variables: create a .env file for both frontend and backend

   ```bash
   touch backend/.env
   touch frontend/.env
   ```

   In the backend .env, you need
      ```bash
        MOVIE_DB_API_KEY=<your key>
        MONGO_REMOTE_URL=<your url>
        PORT=8000
        EXPRESS_ENV=development
        VITE_ORIGIN=*
    ```
   In the frontend .env, you need
      ```bash
        VITE_API_URL=http://localhost:8000
    ```

Note that the VITE_API_URL must match the PORT value

## Running the App

Once the installation is complete, you can run the app locally with the following commands:

Start the backend, depending on your current working directory, e.g. /

```bash
cd backend && node server.js
```
Start the frontend, depending on your current working directory, e.g. /

```bash
cd frontend && npm run dev
```

This command starts the development server, and you can view your app by navigating to [http://localhost:5173](http://localhost:5173) in your browser.

Ce projet est sous licence ``MIT``
