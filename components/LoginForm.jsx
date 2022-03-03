
import { useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'

export default function LoginForm(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        const response = await axios.post("/api/auth",{ email, password })
        console.log(response.data)
    }

    return (
        <form action="" className="flex flex-col justify-around items-center p-10 
        rounded-3xl shadow-2xl bg-blue-100 " onSubmit={handleSubmit}>

            <div className="text-2xl text-blue-900 font-bold">
                Login
            </div>

            <Input type="email" name="email" id="email-in" bindFunction={setEmail}></Input>
            <Input type="password" name="password" id="password-in" bindFunction={setPassword}></Input>

            <button type="submit" className="bg-gradient-to-r from-green-400 to-green-700 
            text-white text-xl font-bold px-5 py-2 rounded-full">
                Login
            </button>
        </form>
    )
}