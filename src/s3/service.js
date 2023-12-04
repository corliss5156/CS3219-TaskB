// src/services/s3Service.js
const { s3, s3BucketName } = require('../config/config');

// Function to upload a file to S3
const uploadFileToS3 = async (fileKey, fileData) => {
  const params = {
    Bucket: s3BucketName,
    Key: fileKey,
    Body: fileData,
  };
  
  return s3.upload(params).promise();
};

// Function to list objects in the S3 bucket
const listObjectsInS3 = async () => {
  const params = {
    Bucket: s3BucketName,
  };

  return s3.listObjectsV2(params).promise();
};
// Function to delete object from S3
const deleteObjectInS3 = async(objectKey) => {
    const params = {
        Bucket: s3BucketName, 
        Key: objectKey
    }
    
    return s3.deleteObject.promise()
}

//Function to get object from S3 by object key 
const getObjectInS3 = async(objectKey) => {
  const params = {
    Bucket: s3BucketName, 
    Key: objectKey
}
  return s3.getObject(params).promise()

}

module.exports = { uploadFileToS3, listObjectsInS3, deleteObjectInS3, getObjectInS3 };
