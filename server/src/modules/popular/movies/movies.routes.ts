import { type FastifyInstance, type FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import service from './movies.service'

type PopularMoviesRequest = FastifyRequest<{
  Querystring: { page: string }
}>

export default async (app: FastifyInstance): Promise<void> => {
  app.get('/', async (request: PopularMoviesRequest, reply) => {
    try {
      const page = request.query.page ? parseInt(request.query.page) : 1
      const movies = await service.getMovies(page)
      return await reply.status(StatusCodes.OK).send(movies)
    } catch (err) {
      app.log.error(err)
      return await reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  })
}
