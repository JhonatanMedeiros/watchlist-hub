import { type FastifyInstance } from 'fastify'
import popularMoviesRoutes from './modules/popular/movies/movies.routes'

export default async (app: FastifyInstance): Promise<void> => {
  app.register(popularMoviesRoutes, { prefix: '/api/popular-movies' })
}
