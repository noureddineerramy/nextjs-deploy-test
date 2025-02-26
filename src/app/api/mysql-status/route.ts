import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export async function GET() {
    try {
        const connection = await mysql.createConnection({
          host: process.env.MYSQL_HOST || 'mysql',
          user: process.env.MYSQL_USER || 'user',
          password: process.env.MYSQL_PASSWORD || 'password',
          database: process.env.MYSQL_DATABASE || 'nextjs_db',
        });
    
        await connection.connect();
        await connection.end();
        
        return NextResponse.json({ status: 'connected', message: 'Successfully connected to MySQL' });
      } catch (error) {
        return NextResponse.json({ status: 'error', message: `Failed to connect to MySQL ${error}` });
      }
}
