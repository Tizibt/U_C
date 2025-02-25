
// import mongooDb from ';
import dotenv from "dotenv";
import { Mongoose } from "mongoose";

dotenv.config();

const pool=Mongoose.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    connectionLimit:10,
    queueLimit:0,
    waitForConnections:true
});

const checkConnection=async()=>{
    try {
        const connection=await pool.getConnection();
        console.log("Database Connection Successfull!!");
        connection.release();
        
    } catch (error) {
        console.log("Error connecting to database!");
        throw error;
        
    }
}

export {pool,checkConnection};