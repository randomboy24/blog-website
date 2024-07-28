import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"

export interface FullBlogType{
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
}

export const FullBlog = ({blog}: {blog:FullBlogType}) => {
    return(
        <div>
            <Appbar></Appbar>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col ml-10">
                    <div className="mt-10 text-5xl font-bold"> 
                        {blog.title}
                    </div>
                    <div className="text-gray-500 mt-3">
                        post on 2nd December 2023
                    </div>
                    <div className="mt-4 text-lg">
                        {blog.content}
                    </div>
                </div>
                <div className="flex flex-col mt-12 max-w-md mr-10">
                    <div className="text-gray-500">
                        Author
                    </div>
                    <div className="flex flex-row">
                        <div className="mt-5">
                            <Avatar name={blog.author.name} size="big"/>
                        </div>
                    <div className="flex flex-col">
                        <div className="ml-4 text-xl font-bold">
                            {blog.author.name}
                        </div>
                        <div className="mt-1 ml-4 text-gray-500">
                            Random catch phrase about the author's ability to grab the user's attention 
                        </div>
                    </div>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
}