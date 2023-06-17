import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
   const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-z5do9qs-shard-00-00.usad6tf.mongodb.net:27017,ac-z5do9qs-shard-00-01.usad6tf.mongodb.net:27017,ac-z5do9qs-shard-00-02.usad6tf.mongodb.net:27017/?ssl=true&replicaSet=atlas-pg65a1-shard-0&authSource=admin&retryWrites=true&w=majority`;
       try{
       await mongoose.connect(URL, {useUnifiedTopology: true });
       console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with the database ', error.message);
    }
}
export default Connection;

