import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from 'axios'
import {CreateBlogInput} from 'random_boy-medium-common'
import { useNavigate } from "react-router-dom"


export const Publish = () => {
    const [title,setTitle] = useState<string>('');
    const [content,setContent] = useState<string>('');
    const navigate = useNavigate()

    async function createBlog() {
        const response = await axios.post('https://medium.jatinthegod212.workers.dev/api/v1/blog',{
            title:title,
            content:content
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
        )
        navigate(`/blog/${response.data.id}`)

    }

    return (
        <div>
            <Appbar />
            <div className="flex flex-row justify-center w-full">
                <div className="w-7/12">
                    <input  className="w border border-gray-300 rounded mt-4 w-full pl-2 h-8 pb-1 hover:border-blue-500 hover:border-2" placeholder="enter the title" type="text" onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                    <textarea className="pl-2 mt-2 border border-gray-300 h-48 rounded  w-full hover:border-blue-500 hover:border-2" placeholder="Write an article..." onChange={(e) => {
                        setContent(e.target.value)
                    }}></textarea>
                    <button className="bg-blue-600 border w-32 h-9 rounded-lg text-white mt-4 px-1 hover:border-slate-600" onClick={createBlog}>Publish post</button>
                </div>
            </div>
        </div>
    )
}