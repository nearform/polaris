const fastify = require('fastify')({ logger: true })
const webpush = require('web-push')
const dotenv = require('dotenv')

dotenv.config()

fastify.register(require('fastify-cors'))

fastify.post('/push', async (request, reply) => {
  const { subscription, message } = request.body

  setTimeout(() => {
    const options = {
      TTL: 24 * 60 * 60,
      vapidDetails: {
        subject: 'mailto:sender@domain',
        publicKey: process.env.VAPID_PUBLIC_KEY,
        privateKey: process.env.VAPID_PRIVATE_KEY
      }
    }

    webpush.sendNotification(subscription, message, options)
  }, 0)

  return reply.status(200).send('OK')
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
