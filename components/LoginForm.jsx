import { useContext, useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import Link from 'next/link'
import { UserContext } from '../contexts/UserContext';
import { MoonLoader } from 'react-spinners';


const linkClasses = "font-bold underline"



export default function LoginForm({ signUpFlag }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    logIn,
    signUp,
    error
  } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const info = {
      name,
      password
    }
    setLoading(true)
    signUpFlag ? await signUp(info) : await logIn(info)
    setLoading(false)
  }

  return <form action="" className="flex flex-col justify-around items-center p-10 
        rounded-3xl shadow-2xl bg-blue-100 " onSubmit={handleSubmit}>

            <div className="text-2xl text-blue-900 font-bold">
                {signUpFlag ? "Sign Up" : "Login"}
            </div>

            <Input type="username" name="name" id="name-in" bindFunction={setName}></Input>
            <Input type="password" name="password" id="password-in" bindFunction={setPassword}></Input>

            <MoonLoader color="green" css={`
              display: ${loading ? "initial" : "none"}
            `}></MoonLoader>

            <div className="text-red-500 font-bold">
              {error}
            </div>

            <div className="text-blue-700 my-3">
              {
                signUpFlag ? 
                <>Already registered? <Link href="/" className={linkClasses}>Login</Link></>
                : 
                <>Not registered yet? <Link href="/register" className={linkClasses}>Sign Up</Link></>
              }
            </div>

            <button type="submit" className="bg-gradient-to-r from-green-400 to-green-700 
            text-white text-xl font-bold px-5 py-2 rounded-full">
                {signUpFlag ? "Sign Up" : "Login"}
            </button>
        </form>;
}