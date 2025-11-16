import { Client } from 'pg';

const client = new Client({
    connectionString: 'Your URL'
})

 async function insertUserData(username: string, password: string, email: string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
    `, [username, password, email])

    
    console.log(result)
}

insertUserData(
    "Naveen",
    "12345",
    "naveen@gmail.com"
);