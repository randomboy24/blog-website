import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {signupInput,signinInput,CreateBlogInput,updateBlogInput} from 'random_boy-medium-common'

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();

userRouter.post('/signup',async (c) => {

    const body = await c.req.json()

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"Inputs not correct"
      })
    }
    //add zod and hash the passwords
    const userExists = await prisma.user.findUnique({
      where : {
        username:body.username
      }
    })
    
    if(userExists){
      return c.json({
        message:"user already exists"
      })
    }
    console.log(userExists)
    try{
      const res = await prisma.user.create({
        data: {
          username:body.username,
          password:body.password,
          name:body.name
        }
      })
      const token = await sign({id: res.id},c.env.JWT_SECRET)
      return c.json({
        jwt:token
      })
    }
    catch (e){
      return c.text("invalid data")
    }
    
  })

  userRouter.post('/signin',async (c) => {
    const body = await c.req.json()

    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"Inputs not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
  
    //add zod and hash the passwords
    const userExists = await prisma.user.findUnique({
      where : {
        username:body.username,
        password:body.password
      }
    })

    console.log(userExists)
  
    if(!userExists){
      return c.json({
        message:"user doesn't exists"
      })
    }
    else{
      const token = await sign({id:userExists.id},c.env.JWT_SECRET)
      
      return c.json({
        jwt:token
      })
    }
  })