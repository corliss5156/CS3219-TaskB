// src/controllers/s3Controller.js
const { uploadFileToS3, listObjectsInS3, deleteObjectInS3 } = require('../s3/service');

// Controller for handling file uploads
const uploadFile = async (req, res) => {
  try {
    const { originalname, buffer } = req.file;
    const fileKey = `uploads/${originalname}`;

    await uploadFileToS3(fileKey, buffer);

    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for listing objects in the S3 bucket
const listObjects = async (req, res) => {
  try {
    const result = await listObjectsInS3();

    const objects = result.Contents.map((object) => ({
      Key: object.Key,
      LastModified: object.LastModified,
      Size: object.Size,
    }));

    res.status(200).json(objects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Controller for deleting oject by key in the S3 bucket 
const deleteObject = async(req, res) => {
  try {
    const {objectKey} = req.params

    await deleteObjectInS3(objectKey);

    res.status(200).json(objectKey)
  } catch (error) {
    console.log(error); 
    res.status(500).json({error: error})
  }
}

module.exports = { uploadFile, listObjects, deleteObject };
