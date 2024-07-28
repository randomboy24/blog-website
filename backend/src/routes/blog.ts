import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from "random_boy-medium-common";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	},
  Variables: {
    userId:string;
  }
}>();

blogRouter.use("/*",async (c,next) => {
    //extract the user id
    // pass it down to the route handler

    try{

      const authHeader = c.req.header("authorization") || ''
      // const token = authHeader.split(" ")[1]  // you can do this here as well ------> ||  '' it says that if the user doesn't send the authorizaiton headers then this empty string will be used
      
      console.log(authHeader)
      const user = await verify(authHeader,c.env.JWT_SECRET)
      console.log("in a middleware")
      console.log(user.id)
      if(user){
        
        console.log("hello from if user")
        //@ts-ignore
        c.set("userId",user.id)
        await next();
        console.log("hello after next")
      }
      else{
        c.status(403)
        return c.json({
          message:"You are not logged in"
        })
      }
    }catch (e) {
      return c.json({
        message:"you are not loggged in"
      })
    }
    

})
blogRouter.post("/",async (c) => {
  
      const body = await c.req.json()

      const {success} = createBlogInput.safeParse(body);
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
      const authorId = c.get("userId")

      const blog = await prisma.blog.create({
        data : {
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
      })
      
      return c.json({
        id:blog.id
      })
  })
  
blogRouter.put('/',async (c) => {
      const body = await c.req.json()

      const {success} = updateBlogInput.safeParse(body);
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

      const blog = await prisma.blog.update({
        where : {
            id:body.id
        },
        data : {
            title:body.title,
            content:body.content
        }
      })

      return c.json({
        id:blog.id
      })
  })
  
blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      
      //add zod and hash the passwords
      // const body = await c.req.json()

      const blogs = await prisma.blog.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });

      return c.json({
        blogs
      })
  })

blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    
      //add zod and hash the passwords
      const id = c.req.param("id")
      try{

          const blog = await prisma.blog.findFirst({
              where:{
                  id:Number(id)
                },
                select: {
                  id:true,
                  title:true,
                  content:true,
                  author: {
                    select:{
                      name:true
                    }
                  }
                }
            })

            return c.json({
                blog
              })
        }
        catch (e) {
            c.status(411)
            return c.json({
                message:"Error while fetching blog post"
            })
        }

     
  })

  blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    
      //add zod and hash the passwords
      // const body = await c.req.json()

      const blogs = await prisma.blog.findMany();

      return c.json({
        blogs
      })
  })