const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'REST API for managing tasks and users',
    },
    servers: [{ url: 'http://localhost:5000' }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id:       { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
            name:      { type: 'string', example: 'John Doe' },
            email:     { type: 'string', example: 'john@example.com' },
            role:      { type: 'string', enum: ['admin', 'user'] },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Task: {
          type: 'object',
          properties: {
            _id:         { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0e' },
            title:       { type: 'string', example: 'Fix login bug' },
            description: { type: 'string', example: 'The login button is broken on mobile' },
            assignedTo:  { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
            priority:    { type: 'string', enum: ['low', 'medium', 'high'] },
            status:      { type: 'string', enum: ['pending', 'in-progress', 'completed'] },
            dueDate:     { type: 'string', format: 'date-time' },
            createdBy:   { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0f' },
            createdAt:   { type: 'string', format: 'date-time' },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Not authorized' },
          },
        },
      },
    },
  },
  apis: ['./src/docs/*.js'],
};

module.exports = swaggerJsdoc(options);
