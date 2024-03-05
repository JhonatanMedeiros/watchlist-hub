import { TheMovieDBClient } from './themoviedb/client'

const API_KEY = process.env.THE_MOVIE_DB_API_KEY!
console.log(API_KEY)

const theMovieDB = new TheMovieDBClient(API_KEY)

export default theMovieDB
