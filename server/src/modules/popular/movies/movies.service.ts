import {
  createSuccessServiceResult,
  type ServiceResult
} from '../../../infrastructure/result.service'
import repository from './movies.repository'
import type { PaginationResultTdb } from '../../../lib/themoviedb/pagination-result.tdb.type'
import type { MovieTDB } from '../../../lib/themoviedb/movie.tdb.type'

const getMovies = async (page: number): Promise<ServiceResult<PaginationResultTdb<MovieTDB>>> => {
  const data = await repository.getMovies(page)
  return createSuccessServiceResult(data)
}

export default {
  getMovies
}
