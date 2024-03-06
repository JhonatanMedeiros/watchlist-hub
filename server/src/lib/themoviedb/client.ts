import fetch, { type RequestInit } from 'node-fetch'
import { redis } from '../../infrastructure/cache/redis'
import { type MovieTDB } from './movie.tdb.type'
import { type PaginationResultTdb } from './pagination-result.tdb.type'

export class TheMovieDBClient {
  private readonly apiKey: string
  private readonly baseUrl: string
  private readonly language: string

  constructor(apiKey: string, language = 'pt-BR') {
    this.apiKey = apiKey
    this.language = language
    this.baseUrl = 'https://api.themoviedb.org/3'
  }

  async getPopularMovies(page = 1): Promise<PaginationResultTdb<MovieTDB>> {
    const cacheKey = `popularMovies:${page}:${this.language}`

    const cachedData = await redis.get(cacheKey)
    if (cachedData) {
      return JSON.parse(cachedData)
    }

    const url = `${this.baseUrl}/movie/popular?language=${this.language}&page=${page}`

    const response = await this.fetch<PaginationResultTdb<MovieTDB>>(url, {
      method: 'GET'
    })

    await redis.setex(cacheKey, 3600, JSON.stringify(response))
    return response
  }

  private async fetch<T>(url: string, options: RequestInit): Promise<T> {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  }
}
