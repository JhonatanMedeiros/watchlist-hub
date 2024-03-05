import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'

import loggerOpts from './infrastructure/logger/logger.opts'
import errorHook from './infrastructure/error/error.hook'
import handler from './infrastructure/handler'
import dotenv from './infrastructure/dotenv'
import routes from './routes'

const app = Fastify({
  logger: process.env.NODE_ENV !== 'test' ? loggerOpts : false,
  disableRequestLogging: true
})

export default app
  .addHook('onResponse', errorHook)
  .setErrorHandler(handler.errorHandler)
  .setNotFoundHandler(handler.notFoundHandler)
  .register(cors)
  .register(helmet)
  .register(dotenv)
  .register(routes)
