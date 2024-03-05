import app from './app'
import db from './infrastructure/database/prisma.client'

const PORT = process.env.PORT ?? 3000

const start = async (): Promise<void> => {
  try {
    await app.listen({ port: PORT as number, host: '0.0.0.0' })

    if (process.env.NODE_ENV === 'development') {
      db.$on('query', ({ query, params, duration }) => {
        app.log.debug(`Query: ${query}`)
        app.log.debug(`Params: ${params}`)
        app.log.debug(`Duration: ${duration}ms`)
      })
    }

    app.log.info('Server has started! 🚀')
  } catch (err) {
    console.log(err)
    app.log.error(err)
    process.exit(1)
  }
}

export default { start }
