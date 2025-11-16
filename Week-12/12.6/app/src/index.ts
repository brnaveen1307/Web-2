import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: "Connection Pool URL",
		}).$extends(withAccelerate())

		const response = await prisma.log.create({
			data: {
				level: 'Info',
				message: `${request.method} ${request.url}`,
				meta: {
					headers: JSON.stringify(request.headers),
				},
			},
		})

		console.log(JSON.stringify(response))

		return new Response(`request method: ${request.method}!`)
	},
}