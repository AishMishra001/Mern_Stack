import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function  POST(req : NextRequest){


  const body = await req.json() ; 

  const user = await prisma.user.create({
    data : {
      username : body.username , 
      password : body.password 
    }
  })

  return NextResponse.json({
    message : "You are signing up !!"  , 
    user 
  })
}



export function PUT(){

  return NextResponse.json({
    user : "Krshn", 
    password : "Radha"
  })
}