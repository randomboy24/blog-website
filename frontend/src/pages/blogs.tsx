
import { BlogCard } from '../components/blogCard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'
import { Loader } from '../components/Loader'

export const Blogs = () => {
    const {loading,blogs} = useBlogs()
    if(loading){
        return(
            <div className="flex flex-col justify-center h-screen">
                <div className="flex flex-row justify-center">
                    <Loader />
                </div>
            </div>
        )
    }
    return (  
        <div>
            <Appbar />
            <div className='flex flex-row justify-center '>
                <div className='mt-5 w-full md:w-7/12'>
                        {blogs.map(blog => 
                            <BlogCard
                            authorName={blog.author.name || "anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate='24Sep 2004'
                            id={blog.id}
                            />
                        )}
                </div>
            </div>
        </div>  
    )
}

