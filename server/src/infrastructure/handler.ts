import { type FastifyError, type FastifyReply, type FastifyRequest } from 'fastify'

const errorHandler = async (error: FastifyError & { sqlMessage?: string }, request: FastifyRequest, reply: FastifyReply): Promise<never> => {
  if (error.validation) {
    return await reply.status(400).send({ data: null, errors: [error.message] })
  }

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  request.log.error(`An internal server error occured ${error}`)

  return await reply.status(500).send({ data: null, errors: [error?.sqlMessage || error?.message || 'Unknown error'] })
}

const notFoundHandler = async (req: FastifyRequest, reply: FastifyReply) => {
  return await reply.status(404).send({
    data: null,
    errors: [
      `Route ${req.method}:${req.url} not found`
    ]
  })
}

export default {
  notFoundHandler,
  errorHandler
}
