import { NextResponse } from "next/server";

export async function GET() {
  const safeEnvVars = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => !key.includes('SECRET') && !key.includes('PRIVATE'))
  )
  return NextResponse.json({ message: safeEnvVars});
}