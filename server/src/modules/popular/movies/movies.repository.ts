import { type Movie } from './movies.type'
import theMovieDB from '../../../lib/the-movie-db'

const getMovies = async (): Promise<Movie[]> => {
  // Get movies from The Movie Database API
  const movies = await theMovieDB.getPopularMovies()
  console.log(movies)
  return movies
  // return []
}

export default {
  getMovies
}
