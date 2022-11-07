import mongoose from 'mongoose';
import Schema from 'mongoose.Schema';

const orderSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
},
    {
        timestamps: true,
    }
);

const MovieOrder = mongoose.model('MovieOrder', orderSchema);
export default MovieOrder;

