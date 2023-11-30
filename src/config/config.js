const aws = require('aws-sdk');

require('dotenv').config();
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new aws.S3();

// Access S3_BUCKET_NAME
const s3BucketName = process.env.S3_BUCKET_NAME;

module.exports = {s3, s3BucketName}
