import { useEffect } from "react";
import { FullBlog } from "../components/FullBlog";
import { Loader } from "../components/Loader";
import { useBlog } from "../hooks"
import { useNavigate, useParams } from 'react-router-dom'


export const Blog = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/signup")
        }
    })
    const { id } = useParams()
    const {loading,blog} = useBlog({
        id: id || " "
    });
    if(loading){
        return(
           <div className="flex flex-col justify-center h-screen">
            <div className="flex flex-row justify-center">
                <Loader />
            </div>
           </div>
        )
    }
    console.log(blog)
    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    )
}