import { useContext, useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
export default function LoginForm(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {
    logIn
  } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    logIn({
      name,
      password
    });
  }

  return <form action="" className="flex flex-col justify-around items-center p-10 
        rounded-3xl shadow-2xl bg-blue-100 " onSubmit={handleSubmit}>

            <div className="text-2xl text-blue-900 font-bold">
                Login
            </div>

            <Input type="username" name="name" id="name-in" bindFunction={setName}></Input>
            <Input type="password" name="password" id="password-in" bindFunction={setPassword}></Input>

            <button type="submit" className="bg-gradient-to-r from-green-400 to-green-700 
            text-white text-xl font-bold px-5 py-2 rounded-full">
                Login
            </button>
        </form>;
}