import { type FastifyInstance } from 'fastify'
import * as dotenv from 'dotenv'

export default async (app: FastifyInstance): Promise<void> => {
  if (process.env.NODE_ENV !== 'production') {
    const path = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
    app.log.info(`Loading ${path} file from directory`)

    const result = dotenv.config({ path })
    if (result.error) {
      app.log.error(`Error loading ${path} file from directory`, result.error)
      throw result.error
    }
  }
}
