// src/routes/s3Routes.js

const multer = require('multer');
const { uploadFile, listObjects, deleteObject } = require('../controller/s3controller');


const express = require('express')
const router = express.Router();
const upload = multer();

// Route for uploading a file to S3
router.post('/upload', upload.single('file'), uploadFile);

// Route for listing objects in the S3 bucket
router.get('/list', listObjects);

// Route for deleting object in S3 bucket
router.post('/delete/:objectKey', deleteObject)
module.exports = router;
