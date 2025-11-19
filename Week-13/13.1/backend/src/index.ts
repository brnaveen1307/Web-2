import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

app.use('/api/v1/blog/*', async (c, next) => {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1]
    try {
        const response = await verify(token, c.env.JWT_SECRET)
        if (response && response.id) {
            await next()
            return
        }
    } catch (e) {
        // fall through to unauthorized
    }

    c.status(403)
    return c.json({
        Error: "Unauthorized"
    })
})

app.post('/api/v1/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)

    return c.json({
        jwt: token
    })
})

app.post('/api/v1/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        }
    })

    if (!user || user.password !== body.password) {
        c.status(403)
        return c.json({
            Error: "Invalid credentials"
        })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)

    return c.json({ jwt: token })
})

app.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')
})

export default app
