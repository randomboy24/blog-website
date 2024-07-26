import { ChangeEvent } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';

export const Auth = ({type} : {type: "signin" | "signup"}) => {
    const [postInputes,setPostInputs] = useState({
        name:"",
        username:"",
        password:""
    })
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`https://medium.jatinthegod212.workers.dev/api/v1/user/${type}`,postInputes)
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate('/blogs');
        } catch(e) {
            // alert the user here that the request failed
            alert("Signup failed please try")
        }
    }
    return(
        <div className=" h-screen flex flex-row justify-center">
            <div className="flex flex-col justify-center">
                {/* {JSON.stringify(postInputes)} */}
                <div className="font-bold text-4xl px-10">
                    Create an account
                </div>
                <div className="text-slate-400 px-10"> 
                    {type==="signup"?"Already have an account?":"Don't have an account"}
                    <Link to={type==="signup"?'/signin':'signup'} className="pl-2 underline">{type==="signup"?"Login":"sign up"}</Link>
                </div>
                <div className="mt-8">
                    {type==="signup"?
                    <LabeledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs({
                            ...postInputes,
                            name:e.target.value
                        })
                    }} />:null}
                    <br />
                    <LabeledInput label="Email"  placeholder="abc@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputes,
                            username:e.target.value
                        })
                    }} />
                    <br />
                    <LabeledInput label="Password" type="password" placeholder="" onChange={(e) => {
                        setPostInputs({
                            ...postInputes,
                            password:e.target.value
                        })
                    }} />
                    <br />
                    <button onClick={sendRequest}type="button" className= " w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
                </div>
            </div>
        </div>
    )
}

interface LableledInputetype{
    placeholder:string;
    label:string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void,
    type?: string;
}


function LabeledInput({placeholder,label,onChange,type}:LableledInputetype){
    return(
        <div>
            <div>
            <label className="font-serif m">{label}</label>
            <input onChange={onChange}type={type || "text"} id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" placeholder={placeholder} required />
        </div>
        </div>
    )
}