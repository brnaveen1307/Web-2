import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName, email) {
    const ins = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email,
        }
    });
    console.log(ins);
}
// insertUser('Bharath', "1245", "Bhara", "Rey", "bharath@gmail.com")
async function getTodos(userId) {
    const res = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    });
    console.log(res);
}
// getTodos(1)
async function getTodosAndUserDeatails(userId) {
    const all = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    });
    console.log(all);
}
getTodosAndUserDeatails(1);
async function addTodo(userId) {
    const cr = await prisma.todo.create({
        data: {
            title: "Learn Python",
            description: "Learn Python with Typescript",
            userId: 1
        }
    });
    console.log(cr);
}
// addTodo(1)
//# sourceMappingURL=index.js.map