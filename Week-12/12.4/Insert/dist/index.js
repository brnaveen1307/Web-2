import { Client } from 'pg';
const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_m83ouizMCSxe@ep-fragrant-sky-a475uu6q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
async function insertUserData(username, password, email) {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
    `, [username, password, email]);
    console.log(result);
}
insertUserData("Naveen", "12345", "naveen@gmail.com");
//# sourceMappingURL=index.js.map