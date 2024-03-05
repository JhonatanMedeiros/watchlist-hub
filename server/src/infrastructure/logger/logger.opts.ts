import { type LoggerOptions } from 'pino'
import { type PrettyOptions } from 'pino-pretty'

const loggerOpts: LoggerOptions = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname,reqId',
      colorize: true
    } satisfies PrettyOptions
  },
  level: process.env.NODE_ENV === 'dev' ? 'debug' : 'info'
}

export default loggerOpts
