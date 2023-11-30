# Node with S3 

## Overview

This project demonstrates a Node.js application using Express to interact with an AWS S3 bucket. It includes functionality for uploading files, listing objects, and deleting objects.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- AWS credentials (Access Key ID and Secret Access Key) with permissions to interact with S3

## Setup 

1. Clone the respository: 

```bash 
git clone git@github.com:corliss5156/CS3219-TaskB.git
cd CS3219-TaskB 
```

2. Install dependencies 
```
npm install 
```
3. Configure environmental variables 
Create a `.env` file in the project root and add AWS credentials 
```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
S3_BUCKET_NAME=your_s3_bucket_name
PORT=3000
```

4. Start the application
```
npm start
```
## API Documentation 

The API allows you to interact with an AWS S3 bucket using various endpoints for uploading files, listing objects, and deleting objects.

## Base URL

All endpoints are relative to the base URL: http://localhost:your-port-number

**Authentication** 
API requests require AWS credentials (Access Key ID and Secret Access Key) provided in the `.env` file. For local development purposes, you can simply go to the aws management console > account > security credentials > access key > create access key > local code. 

### Endpoints

#### 1. Upload a File

- **Endpoint:** `POST /upload`
- **Description:** Upload a file to the S3 bucket.

##### Request

- **Method:** `POST`
- **URL:** `/api/upload`
- **Body:**
  - Form data:
    - `file` (File): The file to be uploaded.

##### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "message": "File uploaded successfully"
  }

#### 2. List Objects 
- **Endpoint:** `GET /list`
- **Descriiption:** List objects in the S3 bucket 

##### Request
- **Method:** `GET`
- **URL:** `/api/list`


##### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  [
  {
    "Key": "example-object-1",
    "LastModified": "2023-01-01T12:00:00.000Z",
    "Size": 1024
  },
  {
    "Key": "example-object-2",
    "LastModified": "2023-01-02T12:00:00.000Z",
    "Size": 2048
  }]
    ```

#### 3. Delete Object
- **Endpoint:** `DELETE /delete/:objectKey`
- **Descriiption:** Delete object from S3 bucket

##### Request
- **Method:** `DELETE`
- **URL:** `/api/delete/:objectKey`


##### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
    {
    "message": "Object deleted successfully"
    }

    ```

### Tasks 
- [x] CRUD operations for interaction with S3 
- [ ] Testing API functions 
- [ ] Automate testing
- [ ] Frontend 
- [ ] Frontend tests
- [ ] Deployment 