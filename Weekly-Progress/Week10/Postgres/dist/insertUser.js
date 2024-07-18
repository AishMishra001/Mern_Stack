"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
function insertData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionString = 'postgresql://aishlunatic001:aqcIePTg7Y9m@ep-late-glitter-a1jv3kxb.ap-southeast-1.aws.neon.tech/test?sslmode=require';
        const client = new pg_1.Client({
            connectionString: connectionString,
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3);";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData("username5", "user5@gmail.com", "pass").catch(console.log);

// ok lol .....2-3 weeks without any push gone...I am shamless
