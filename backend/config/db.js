import {neon} from '@neondatabase/serverless'
import dotenv from 'dotenv'
dotenv.config()

const {PGHOST,PGPASSWORD,PGUSER,PGDATABASE} = process.env;

//create a sql connection using our environment variables
export const sql = neon(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`,
)


