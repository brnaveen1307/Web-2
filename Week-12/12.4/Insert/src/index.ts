import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_m83ouizMCSxe@ep-fragrant-sky-a475uu6q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function insertUserData(username: string, password: string, email: string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ()
    `)

    console.log(result)
}

insertUserData(
    "user",
    "1234",
    "user@gmail.com"
);