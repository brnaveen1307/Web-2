import { Client } from 'pg'

const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_Kg7cyDb4aHvV@ep-autumn-waterfall-adz97phh-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
})

async function createUsersTable(){
    await client.connect(); 
    const res = await client.query(`
        CREATE TABLE employees (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)

    console.log(res);
}

async function insertIntoUsersTable(){

    try{
        const insertQuery = "INSERT INTO users(id, username, email, password) VALUES ($1, $2, $3, $4)"
        const values = [1, 'Naveen', 'naveen@gmail.com', 123456]

        const insert = await client.query(insertQuery, values)

        console.log("Insertion Success: ", insert)
    }catch (err){
        console.error("Error during insertion: ", err)
    }finally{
        await client.end()
    }  
}

async function createAddressTable(){
 
    const res = await client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(100) NOT NULL,
            pincode VARCHAR(10) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES employees(id) ON DELETE CASCADE
        );
    `)

    console.log(res);
}

createUsersTable()
insertIntoUsersTable()
createAddressTable()
