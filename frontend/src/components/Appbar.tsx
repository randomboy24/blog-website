import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"

export const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-row justify-between bg-white h-20 border-b border-slate-300">
            <div className="flex flex-col justify-center ">
                <Link to={'/blogs'}>
                    <div className="  ml-12 mt-2 basis-6/12 text-xl font-semibold ">
                        Medium
                    </div>
                </Link>
            </div>
            
            <div className="flex flex-row justify-around basis-2/12">
                <div className="flex flex-col justify-center">
                    <button className="bg-slate-600 text-white h-8 w-24 rounded-2xl border border-gray-300  hover:border-slate-800" onClick={() => {localStorage.removeItem("token"); navigate('/signup')}}>
                        Logout
                    </button>
                </div>
                <div className="flex flex-col justify-center">
                    <Link to={'/publish'}>
                    <div className="bg-green-700 text-white font-medium rounded-full h-7 w-16 pl-4 pt border border-green-500 hover:border-green-950">
                        New
                    </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="">
                        <Avatar  name="jatin" size="big" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

