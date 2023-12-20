/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 14:42:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
const express = require('express');
const fs = require('fs').promises; // Utilisation des promesses pour fs
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/about', (req, res) => {
  res.send('About Page');
});

const moviesFilePath = __dirname + '/movies.json';

// Route pour lister tous les films (GET)
app.get('/list_movies', async (req, res) => {
  try {
    const data = await fs.readFile(moviesFilePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour créer un nouveau film (POST)
app.post('/list_movies', async (req, res) => {
  try {
    const movies = JSON.parse(await fs.readFile(moviesFilePath, 'utf8'));
    const newMovie = { ...req.body, id: getNextMovieId(movies) };

    movies.push(newMovie);

    await fs.writeFile(moviesFilePath, JSON.stringify(movies), 'utf8');
    
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour mettre à jour un film existant (PUT)
app.put('/list_movies/:id', async (req, res) => {
  const idToUpdate = parseInt(req.params.id);

  try {
    const movies = JSON.parse(await fs.readFile(moviesFilePath, 'utf8'));
    const updatedMovie = req.body;

    const updatedMovies = movies.map((movie) => {
      return movie.id === idToUpdate ? { ...movie, ...updatedMovie } : movie;
    });

    await fs.writeFile(moviesFilePath, JSON.stringify(updatedMovies), 'utf8');
    
    res.json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour supprimer un film (DELETE)
app.delete('/list_movies/:id', async (req, res) => {
  const idToDelete = parseInt(req.params.id);

  try {
    const movies = JSON.parse(await fs.readFile(moviesFilePath, 'utf8'));
    const filteredMovies = movies.filter((movie) => movie.id !== idToDelete);

    await fs.writeFile(moviesFilePath, JSON.stringify(filteredMovies), 'utf8');
    
    res.send(`Le film avec l'ID ${idToDelete} a été supprimé.`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function getNextMovieId(movies) {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
}
