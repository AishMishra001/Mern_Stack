import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username : string , password : string , email : string ) {
  const connectionString = 'postgresql://aishlunatic001:aqcIePTg7Y9m@ep-late-glitter-a1jv3kxb.ap-southeast-1.aws.neon.tech/test?sslmode=require';

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3);";
    const values = [username , email , password] ;
    const res = await client.query(insertQuery , values );
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData("username5","user5@gmail.com" , "pass").catch(console.log) ; 

