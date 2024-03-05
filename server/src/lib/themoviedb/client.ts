import fetch, { type RequestInit } from 'node-fetch'

export class TheMovieDBClient {
  private readonly apiKey: string
  private readonly baseUrl: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.themoviedb.org/3'
  }

  async getPopularMovies(): Promise<any[]> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1`
    console.log(this.apiKey)
    console.log(process.env.THE_MOVIE_DB_API_KEY)

    const res = await this.fetch(url, {
      method: 'GET'
    })
    return res
  }

  private async fetch(url: string, options: RequestInit): Promise<any> {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  }
}
