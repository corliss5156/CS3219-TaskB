const s3Controller = require('../src/controller/s3controller')
const service = require('../src/s3/service')
const {faker} = require('@faker-js/faker')

jest.mock('../src/s3/service')


describe('Test s3 controller',() => {
    beforeEach(()=>{
        jest.clearAllMocks()
        const mockConsoleError = jest.fn()
        console.error = mockConsoleError
    })
    afterEach(()=>{
        service.uploadFileToS3.mockRestore()
    })
    const mockReq = {
        file: {
            originalname: faker.string.alphanumeric(), 
            buffer: faker.string.alphanumeric()
        }
    } 
    const mockRes = {
        status: jest.fn().mockReturnThis(), 
        json: jest.fn()
    }
    
    
    describe('Test upload file', () => {
        test('Uploading a file into S3', async () => {
            
           
            service.uploadFileToS3.mockImplementation(async ()=>{})
            await s3Controller.uploadFile(mockReq, mockRes)
            expect(service.uploadFileToS3).toHaveBeenCalledTimes(1)
            expect(service.uploadFileToS3).toHaveBeenCalledWith(mockReq.file.originalname, mockReq.file.buffer)
        })
        test('Error in uploading a file into S3', async () => {
            
            
            
            
            const mockError = new Error('Error')
            mockError.statusCode = 400
            mockError.code = 'Error message'
            
            

            service.uploadFileToS3.mockImplementation(async () => {
                throw mockError
            })

            await s3Controller.uploadFile(mockReq, mockRes)
            expect(mockRes.status).toHaveBeenCalledWith(400)

            expect(mockRes.json).toHaveBeenCalledWith({error: 'Error message'})
        })
    })
    describe('Test list objects', () => {
        test('List objects in S3 bucket', async ()=>{
            const mockListObjects = {
                Contents: [{
                    Key: faker.string.alphanumeric(),
                    LastModified: faker.date.anytime(),
                    Size: faker.number.int
                }]
            }
            service.listObjectsInS3.mockImplementation(async ()=>{return mockListObjects})
            await s3Controller.listObjects(mockReq, mockRes)
            expect(service.listObjectsInS3).toHaveBeenCalledTimes(1)
            expect(mockRes.status).toHaveBeenCalledWith(200)
            expect(mockRes.json).toHaveBeenCalledWith(mockListObjects.Contents)
        })
        test('Error in listing objects in S3 bucket', async () => {
            const mockError = new Error()
            mockError.statusCode = 400 
            mockError.code = 'Error'      

            service.listObjectsInS3.mockImplementation(async ()=> {throw mockError})
            await s3Controller.listObjects(mockReq, mockRes)
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({error: mockError.code})
        })
    })
    describe('Test delete object', () => {
        test('Delete object in S3', async () => {
            mockReq.params = {objectKey: faker.string.alphanumeric()}
            
            service.deleteObjectInS3.mockImplementation(async() => {})
            await s3Controller.deleteObject(mockReq, mockRes)
            expect(service.deleteObjectInS3).toHaveBeenCalledTimes(1)
            expect(mockRes.status).toHaveBeenCalledWith(200)
            expect(mockRes.json).toHaveBeenCalledWith(mockReq.params.objectKey)
        })
        test('Error in deleting object', async () => {
            mockReq.params = {objectKey: faker.string.alphanumeric()}

            const mockError = new Error() 
            mockError.statusCode = 400 
            mockError.code = 'Error in deleting object'

            service.deleteObjectInS3.mockImplementation(async ()=>{throw mockError})
            await s3Controller.deleteObject(mockReq, mockRes)
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({error: mockError.code})
        })
        
    })
    describe('Test get object by key', () => {
        test('Get object by key from S3', async () => {
            mockReq.query = {objectKey: faker.string.alphanumeric()}
            service.getObjectInS3.mockImplementation(()=>{return {}})
            await s3Controller.getObject(mockReq, mockRes)
            expect(service.getObjectInS3).toHaveBeenCalledTimes(1)
            expect(mockRes.status).toHaveBeenCalledWith(200)
            expect(mockRes.json).toHaveBeenCalledWith({})
        })
        test('Error getting object from S3', async () => {
            const mockError = new Error()
            mockError.statusCode = 400 
            mockError.code = 'Error in getting object'
            
            mockReq.query = {objectKey: faker.string.alphanumeric()}
            service.getObjectInS3.mockImplementation(async ()=>{throw mockError})
            await s3Controller.getObject(mockReq, mockRes)
            expect(mockRes.status).toHaveBeenCalledWith(400)
            expect(mockRes.json).toHaveBeenCalledWith({error: mockError.code})


        })
    })
})