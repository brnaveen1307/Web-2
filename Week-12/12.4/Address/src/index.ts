import { Client } from 'pg';

const client = new Client({
    connectionString: 'Your URL'
})

async function createAddressesTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEy,
            user_id INTEGER NOT NULL,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(255)  NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(50),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
         );    
    `)

    console.log(result)
}

createAddressesTable();