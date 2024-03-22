import prisma from "@/server/database";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest,) {
   try {
     const { email, password } = await request.json();

     const user = await prisma.user.findUnique({
       where: {
         email: email,
       },
     });

     if (user) {
       return NextResponse.json({
         success: false,
         message: "User already exists",
       });
     }

     const hashPass = await hash(password, 10);

     const NewUser = await prisma.user.create({
       data: {
         email: email,
         password: hashPass,
       },
     });

     if (!NewUser) {
       return NextResponse.json({
         success: false,
         message: "Something Went Wrong",
       });
     }

     return NextResponse.json({
       success: true,
       message: "Your Account Has Been Created",
     });

   } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Somthing Went Wrong!",
    }); 
   }
}
