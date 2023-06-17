

import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import { response } from "express";


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-z5do9qs-shard-00-00.usad6tf.mongodb.net:27017,ac-z5do9qs-shard-00-01.usad6tf.mongodb.net:27017,ac-z5do9qs-shard-00-02.usad6tf.mongodb.net:27017/?ssl=true&replicaSet=atlas-pg65a1-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: {useUnifiedTopology: true , useNewUrlParser : true},
    file: (request,file) => {
        const match = ["image/png","image,jpg"];

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }

});

export default multer({storage});