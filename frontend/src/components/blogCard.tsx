import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"

interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
    id:number
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-300 flex flex-col mb-4 p-4 sm:p-0">
                <div className="text-gray-500">
                    <Avatar name={authorName} />{authorName} . {publishedDate}
                </div>
                <div className="text-2xl font-bold">
                    {title}
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-500 ">
                        {content.length<=150?content.slice(0,150):content.slice(0,150)+'...'}
                    </div>
                </div>
                <div className="mt-4 mb-2  text-gray-400">
                    {(Math.ceil(content.length/100)) + 'minutes read'}
                </div>
            </div>
        </Link>
    )
}


