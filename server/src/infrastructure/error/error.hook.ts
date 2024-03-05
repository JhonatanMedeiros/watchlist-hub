import { type FastifyReply, type FastifyRequest } from 'fastify'

const getLogLevel = (status: number): 'info' | 'warn' | 'error' => {
  if (status < 400) return 'info'
  if (status < 500) return 'warn'
  return 'error'
}

export default async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const message = `${request.method} ${reply.statusCode} ${request.url} ${reply.elapsedTime.toPrecision(2)}ms`
  request.log[getLogLevel(reply.statusCode)](message)
}
