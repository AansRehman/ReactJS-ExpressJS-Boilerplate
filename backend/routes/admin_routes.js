import express, { json } from 'express';
import Movie from '../models/movie_models.js';
import MovieOrder from '../models/Order_models.js';

const router = express.Router();

router.post('/add', (req, res)=>{
    
    const id = Number(req.body.id);
    const title = req.body.title;
    const year = Number(req.body.year);
    const rating = Number(req.body.rating);
    const genre = req.body.genre;
    
    const newMovie = new Movie({
        id, title, year, rating, genre, 
    });

    newMovie.save()
    .then(()=>res.json('Movie Added!'))
    .catch(err=>res.status(400).json('Error: '+err))
});


router.post('/update/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then(movie=>{
        movie.id = Number(req.body.id);
        movie.title = (req.body.title);
        movie.year = Number(req.body.year);
        movie.date = Date.parse(req.body.date);
        movie.rating = Number(req.body.rating);
        movie.genre = Number(req.body.genre);

    newMovie.save()
    .then(()=>res.json('Movie Updated!'))
    .catch(err=>res.status(400).json('Error: '+err))
    })
    .catch(err=>res.status(400).json('Error: '+err))
});


// const users = [
//     {
//         name: 'John Doe',
//         age: 25
//     }
// ]

// router.get('/', (req, res) => {
//     res.send(users)
// })

// router.post('/', (req, res) => {
//     const user = req.body;
//     console.log(req.body);
//     res.send(`added into the DB`)
// })




export default router;