import axios from "axios";
import { createContext, useMemo, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [error, setError] = useState("")

    const token = user?.token
    
    const isAuthenticated = !!token
    
    const reminders = useMemo(() => {
        console.log(user?.appointments)
        return user?.appointments?.map(reminder => {
            return {...reminder, date: new Date(reminder.date)}
        })
    }, [user?.appointments])

    const api = useMemo(() => {
        return axios.create({
            baseURL: "http://localhost:2000/api",
            headers: {
                'x-access-token': token
            }
        })  
    }, [token]) 
    
    
    async function signUp(userInfo){
        const { data } = await api.post("/newUser", userInfo)

        console.log("DATA:", data)
        if(data.error){
            setError(data.error)
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            setUser(newData)
        }
    }


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

        const postData = { ...reminder, name: user.name }

        const { data } = await api.post(`/users/${user.name}`, postData)
        if(data.error){
            console.log(data.error)
            setError(data.error)
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            console.log(newData)
            setUser(newData)
        }
    }

    async function recoverReminders(){
        const { data } = await api.get(`/users/${user.name}/reminders`)
        if(data.error)
            setError(data.error)
        else {
            setUser({ ...user, ...data })
        }
    }


    async function deleteReminder(id){
        const { data } = await api.delete(`/users/${user.name}/${id}`)
        if(data.error){
            console.log(data.error)
            setError(data.error)
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            setUser(newData)
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
          signUp,
          deleteReminder
        }}
      >
        {children}
      </UserContext.Provider>
    );
}