
import Input from '../components/Input'

export default function LoginForm(props){
    return (
        <form action="" className="flex flex-col justify-around items-center p-10 rounded-3xl shadow-2xl bg-blue-100">

            <div className="text-2xl text-blue-900 font-bold">
                Login
            </div>

            <Input type="email" name="email" id="email-in" ></Input>
            <Input type="password" name="password" id="password-in" ></Input>

            <button className="bg-gradient-to-r from-green-400 to-green-700 text-white text-xl font-bold px-5 py-2 rounded-full">
                Login
            </button>
        </form>
    )
}