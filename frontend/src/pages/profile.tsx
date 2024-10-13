import { stringify } from "querystring";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/Avatar";
import { useState } from "react";

export default function Profile(){
    const {user} = useParams();
    const [isHomeSelected,setIsHomeSelected] = useState(false)
    return (
        <div>
            <Appbar/>
            <div className="grid grid-cols-12 h-screen border">
                <div className="flex justify-end col-span-8 border-r pt-12">
                    <div className="flex flex-col w-[70%] ">
                        <div className="text-4xl font-bold">
                            Randomboy
                        </div>
                        <div className="flex mt-10  w-[70%] border-b gap-x-5 h-9">     
                            <div className={`${isHomeSelected?'border-b border-gray-700':null} hover:cursor-pointer`} onClick={() => {
                                setIsHomeSelected(true)
                            }}>Home</div>
                            <div className={`${!isHomeSelected?'border-b border-gray-700':null} hover:cursor-pointer`} onClick={() => {
                                setIsHomeSelected(false)
                            }}>About</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pl-10 col-span-4 pt-12">
                    <Avatar name="Alex" size="verybig"/>
                    <span className="font-bold text-md mt-3">Random Boy</span>
                </div>
            </div>
        </div>
    )
}