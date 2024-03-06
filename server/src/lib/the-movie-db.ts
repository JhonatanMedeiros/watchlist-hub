import { TheMovieDBClient } from './themoviedb/client'
import * as dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.THE_MOVIE_DB_API_KEY!

const theMovieDB = new TheMovieDBClient(API_KEY)

export default theMovieDB
