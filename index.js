import express from "express";
import mongoose from 'mongoose'
import router from './router.js';



const PORT = 5000;

const DB = 'mongodb+srv://apkartas:Aa170189@cluster1.uyh4wym.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use( express.json() );
app.use( '/api', router )

const startApp = async () => {
    try {
        await mongoose.connect( DB, { useUnifiedTopology: true, useNewUrlParser: true } );
        app.listen( PORT, () => console.log( `start port - ${PORT}` ) )

    } catch ( e ) {
        console.log( 'e', e )
    }
}

startApp();
