import { NextResponse } from 'next/server';
import {sendEmail} from '../Nodemailer/emailFormat/index';

export const POST = async(req:Request, res:Response)=>{
    try{
        const data = await req.json()
        const emailRes = await sendEmail(data)
        return NextResponse.json({message: "OK", data: "Email Send successfully"}, {status:200})
    }catch(error){
        return NextResponse.json({message: "Error", data: error}, {status:500})
    }
}
