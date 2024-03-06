import theMovieDB from '../../../lib/the-movie-db'
import { type PaginationResultTdb } from '../../../lib/themoviedb/pagination-result.tdb.type'
import { type MovieTDB } from '../../../lib/themoviedb/movie.tdb.type'

const getMovies = async (page = 1): Promise<PaginationResultTdb<MovieTDB>> => {
  return await theMovieDB.getPopularMovies(page)
}

export default {
  getMovies
}
