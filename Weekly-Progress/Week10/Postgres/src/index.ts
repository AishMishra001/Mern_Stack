// function to create a table in your database
import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://aishlunatic001:Pass123@@ep-late-glitter-a1jv3kxb.ap-southeast-1.aws.neon.tech/test?sslmode=require"
})


async function createUserTable(){
   await client.connect()
  const result = await client.query(`
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
  `)
  return result ; 
}

createUserTable() ; 