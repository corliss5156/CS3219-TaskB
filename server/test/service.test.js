
const service = require('../src/s3/service')
const {s3} = require('../src/config/config')
const {faker}  = require('@faker-js/faker')

const params = {
    Bucket: faker.string.alphanumeric(),
    objectKey:faker.string.alphanumeric(), 
    objectData: faker.string.alphanumeric()
}


jest.mock('../src/config/config')

describe('Test S3 functions', () => {

    test('Upload file to s3',  async () => {
        const mockUpload = jest.fn().mockImplementation(()=> ({promise: jest.fn()}))
        s3.upload = mockUpload

        await service.uploadFileToS3(params.objectKey, params.objectData);
        expect(mockUpload).toHaveBeenCalledTimes(1)
    })
    
    test('Delete object in S3', async () => {
      const mockDeleteObject = jest.fn().mockImplementation(()=> ({promise: jest.fn()}))
      s3.deleteObject = mockDeleteObject
      
      
      await service.deleteObjectInS3(params.objectKey)
      expect(mockDeleteObject).toHaveBeenCalledTimes(1)
    })

    test('List object in S3', async () => {
        const mockListObjects = jest.fn().mockImplementation(()=> ({promise: jest.fn()}))
        s3.listObjectsV2 = mockListObjects
        
        await service.listObjectsInS3(params.Bucket)
        expect(mockListObjects).toHaveBeenCalledTimes(1)
    })
  
    test('Get object in S3', async () => {
        const mockGetObject = jest.fn().mockImplementation(()=> ({promise: jest.fn()}))
        s3.getObject = mockGetObject
        
        await service.getObjectInS3(params.objectKey)
        expect(mockGetObject).toHaveBeenCalledTimes(1)
    })      
})