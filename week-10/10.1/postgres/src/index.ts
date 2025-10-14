import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
    connectionString: process.env.URI
})
 
// async function createUsersTable(){
//     await client.connect(); 
//     const res = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(100) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(100) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)

//     console.log(res);
// }

// async function insertIntoUsersTable(){

//     try{
//         const insertQuery = "INSERT INTO users(id, username, email, password) VALUES ($1, $2, $3, $4)"
//         const values = [1, 'Naveen', 'naveen@gmail.com', 123456]

//         const insert = await client.query(insertQuery, values)

//         console.log("Insertion Success: ", insert)
//     }catch (err){
//         console.error("Error during insertion: ", err)
//     }finally{
//         await client.end()
//     }  
// }


async function getUser(email: any){
    try{
        const getQuery = "SELECT * FROM users WHERE email = $1"
        const values = [email]

        const get = await client.query(getQuery, values)

        if (get.rows.length > 0) {
            console.log("User found: ", get.rows[0])
            return get.rows[0]
        }else{
            console.log("No user found with the given email")
            return null
        }
    }catch (err){
        console.error("Error during fetching user: ", err)
        throw err
    }finally{
        await client.end()
    }
}

getUser("naveen@gmail.com").catch(console.error)
// createUsersTable();
// insertIntoUsersTable();