import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Loader } from "../components/Loader"

export const Root = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate('/blogs')
        }
        else{
            navigate('/signup')
        }
    },[])
    return (
        <div className="flex flex-col justify-center h-screen">
                <div className="flex flex-row justify-center">
                    <Loader />
                </div>
        </div>
    )
}