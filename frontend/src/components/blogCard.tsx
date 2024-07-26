interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="border-b border-b-slate-500 flex flex-col mb-4 w-">
            <div className="text-gray-500">
                {authorName} . {publishedDate}
            </div>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="text-gray-500">
                {content.length<=100?content.slice(0,100):content.slice(0,100)+'...'}
            </div>
            <div className="mt-4 mb-2  text-gray-400">
                {(Math.ceil(content.length/100)) + 'minutes read'}
            </div>
        </div>
    )
}

