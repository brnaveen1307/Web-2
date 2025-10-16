import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

interface UpdateParams {
    firstname: string,
    lastname: string
}

async function insertUser(username: string, password: string, firstname: string, lastname: string){
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstname,
            lastname
        }
    })

    console.log(res)
}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
    const updated = await prisma.user.update({
        where: {email: username},
        data: {
            firstname,
            lastname
        }
    })

    console.log(updated)
}

insertUser("naveen@gmail.com", "password", "Naveen", "Kumar")

updateUser("naveen@gmail.com", {
    firstname: "B R Naveen",
    lastname: "Raj Kumar"
})