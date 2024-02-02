import { Options } from 'swagger-jsdoc'

export const option: Options = {
    definition: {
      openapi: '3.1.0',
      info: {
        title: 'API documentation for WanderInn website',
        version: '0.1.0',
        description:
          'This is an API documententation made with Express and documented with Swagger',
      },
      servers: [
        {
          url: 'http://localhost:8000',
        },
      ],
    },
    apis: ['./routes/*.ts'],
}