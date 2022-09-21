import mongoose from "mongoose";

mongoose.connect("mongodb+srv://kashmir:aasdqweASD@cluster0.smpalg0.mongodb.net/projetox");

let db = mongoose.connection;

export default db;