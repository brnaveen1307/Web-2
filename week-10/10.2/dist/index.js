import { PrismaClient } from './generated/prisma/index.js';
const prisma = new PrismaClient();
async function insertUser(username, password, firstname, lastname) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstname,
            lastname
        },
        select: {
            id: true,
            password: true
        }
    });
    console.log(res);
}
insertUser("naveen@gmail.com", "password", "Naveen", "Msd");
//# sourceMappingURL=index.js.map