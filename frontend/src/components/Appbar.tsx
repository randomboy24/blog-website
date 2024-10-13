import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import {SquarePen, SquarePenIcon, User} from 'lucide-react'
import { useState } from "react";

export const Appbar = () => {
    const navigate = useNavigate();
    const [dropDown,setDropDown] = useState(false)
    return (
        <div className="flex flex-row justify-between bg-white h-16 border-b border-slate-300">
            <div className="flex flex-col justify-center ">
                <Link to={'/blogs'}>
                    <div className="ml-12 flex items-center font-serif text-4xl font-semibold ">
                        Medium
                    </div>
                </Link>
            </div>
            
            <div className="flex flex-row justify-around basis-2/12">
                <div className="flex items-center ">
                    <Link to={'/publish'}>
                        <div className="flex items-center gap-x-2 text-[#777] hover:text-[#111]">
                                <SquarePen className="" strokeWidth={1}/>
                                <span>Write</span>
                        </div>
                    </Link>
                </div>
               
                <div className="flex flex-col justify-center">
                    <div className="hover:cursor-pointer " onClick={() => {
                        setDropDown(!dropDown)
                    }}>
                        <Avatar  name="jatin" size="big" />
                    </div> 
                </div>
                    <div className={`${dropDown?'absolute':'hidden'} top-16 right-[26px]  w-52 shadow-gray-500 shadow-md `}>

                            <div className={`flex px-3 h-10 items-center hover:cursor-pointer text-[#777] hover:text-[#111]`} onClick={() => {
                                navigate("/jatinsingh")
                            }}>
                                <User className={``}/>
                                <span className="ml-3 ">Profile</span>
                            </div>
                            <hr />
                            <div className="flex ml-3  h-10 items-center text-[#777] hover:text-[#111] hover:cursor-pointer">
                                Settings
                            </div>
                            <hr />
                            <div className="flex ml-3 h-10 items-center text-[#777] hover:text-[#111] hover:cursor-pointer" onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/signup")
                            }}>
                                Signout
                            </div>
                    </div>  
            </div>
            
            
        </div>
    )
}

