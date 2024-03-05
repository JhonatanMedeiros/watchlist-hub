import { type FastifyInstance } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import service from './movies.service'

export default async (app: FastifyInstance): Promise<void> => {
  app.get('/', async (request, reply) => {
    try {
      const movies = await service.getMovies()
      return await reply.status(StatusCodes.OK).send(movies)
    } catch (err) {
      app.log.error(err)
      return await reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  })
}
