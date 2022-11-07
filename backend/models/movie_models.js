import mongoose from 'mongoose';
import Schema from 'mongoose.Schema';

const movieSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;

