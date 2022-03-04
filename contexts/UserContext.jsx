import axios from "axios";
import { createContext, useMemo, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const token = user?.token
    
    const isAuthenticated = !!token
    
    const reminders = user?.appointments

    const api = useMemo(() => {
        return axios.create({
            baseURL: "http://localhost:2000/api",
            headers: {
                'x-access-token': token
            }
        })  
    }, [token])   


    async function logIn(loginInfo){

        const { data } = await api.post("/login", loginInfo)

        console.log("DATA:", data)
        if(data.error){
            setError(data.error)
        } else {
            setUser({...user, ...data})
        }
    }

    async function postReminder(reminder){
        const { data } = await api.post(`/users/${user.name}`, reminder)
        if(data.error){
            setError(data.error)
        } else {
            setUser({...user, ...data})
        }
    }

    async function recoverReminders(){
        const { data } = api.get(`/users/${user.name}/reminders`)
        if(data.error)
            setError(data.error)
        else {
            setUser({ ...user, ...data })
        }
    }

    return (
      <UserContext.Provider
        value={{
          isAuthenticated,
          user,
          reminders,
          recoverReminders,
          postReminder,
          logIn,
        }}
      >
        {children}
      </UserContext.Provider>
    );
}