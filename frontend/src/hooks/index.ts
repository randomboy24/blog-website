import { useEffect,useState } from "react";
import axios from 'axios';

export interface Blog{
        "content": string,
        "title": string,
        "id": number,
        "author": {
            "name": string
        }
}

const defaultBlog: Blog = {
    content: '',
    title: '',
    id: 0,
    author: {
        name: ''
    }
};

export const useBlogs = () => {
const [loading,setLoading] = useState(true);
const [blogs,setBlogs] = useState<Blog[]>([]);

function fetchBlogs(){
    axios.get('https://medium.jatinthegod212.workers.dev/api/v1/blog/bulk',{
                        headers: {
                            authorization:localStorage.getItem("token")
                        }
            }).then(response =>{
                setBlogs(response.data.blogs)
                setLoading(false)
            })
    
}

useEffect(fetchBlogs,[])
    return {
        loading,
        blogs
    }
}

export const useBlog = ({id}:{id:string}) => {
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState(defaultBlog);
    
    function fetchBlog2(){
        axios.get(`https://medium.jatinthegod212.workers.dev/api/v1/blog/${id}`,{
                            headers: {
                                authorization:localStorage.getItem("token")
                            }
                }).then(response =>{
                    setBlog(response.data.blog)
                    setLoading(false)
                })
        
    }
    
    useEffect(fetchBlog2,[id])
        return {
            loading,
            blog
        }
    }