import {
  createSuccessServiceResult,
  type ServiceResult
} from '../../../infrastructure/result.service'
import { type Movie } from './movies.type'
import repository from './movies.repository'

const getMovies = async (): Promise<ServiceResult<{ movies: Movie[] }>> => {
  const movies = await repository.getMovies()
  return createSuccessServiceResult({ movies })
}

export default {
  getMovies
}
