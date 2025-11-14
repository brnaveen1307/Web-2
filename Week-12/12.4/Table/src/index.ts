import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_m83ouizMCSxe@ep-fragrant-sky-a475uu6q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEy,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );    
    `)

    console.log(result)
}

createUsersTable();