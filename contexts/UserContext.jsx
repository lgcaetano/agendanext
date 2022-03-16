import axios from "axios";
import { createContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { convertToUTC } from "../utils";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [error, setError] = useState("")

    const token = useMemo(() => user?.token, [user])
    
    useEffect(() => {
        if(token) localStorage.setItem("token", token)
    }, [token])
    
    const isAuthenticated = !!token
    
    const reminders = useMemo(() => {
        return user?.appointments?.map(reminder => {
            return {...reminder, date: new Date(reminder.date)}
        })
    }, [user?.appointments])

    const api = useMemo(() => {
        return axios.create({
            baseURL: "https://lgcaetano-agenda.herokuapp.com/api",
            headers: {
                'x-access-token': token
            }
        })  
    }, [token]) 
    
    function logOut(){
        setUser({})
    }


    async function signUp(userInfo){
        const { data } = await api.post("/newUser", userInfo)

        if(data.error){
            setError(data.error)
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            setUser(newData)
            setError("")
        }
    }


    async function logIn(loginInfo){

        const { data } = await api.post("/login", loginInfo)

        if(data.error){
            setError(data.error)
        } else {
            setUser({...user, ...data})
            setError("")
        }
    }

    async function postReminder(reminder){


        const postData = { ...reminder, date: convertToUTC(reminder.date), name: user.name }

        const { data } = await api.post(`/users/${user.name}`, postData)
        if(data.error){
            console.log(data.error)
            setError(data.error)
            setUser({})
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            setUser(newData)
        }
    }

    async function recoverReminders(){
        const { data } = await api.get(`/users/${user.name}/reminders`)
        if(data.error){
            setError(data.error)
            setUser({})
        } else {
            setUser({ ...user, ...data })
        }
    }


    async function deleteReminder(id){
        const { data } = await api.delete(`/users/${user.name}/${id}`)
        if(data.error){
            console.log(data.error)
            setError(data.error)
            setUser({})
        } else {
            const newUserData = data
            const newData = { ...newUserData, token: data.token }
            setUser(newData)
        }
    }

    async function editReminder(id, newReminder){
        const { data } = await api.delete(`/users/${user.name}/${id}`)
        if(data.error){
            console.log(data.error)
            setError(data.error)
            setUser({})
        } else {
            postReminder(newReminder)
        }
    }

    return (
      <UserContext.Provider
        value={{
          isAuthenticated,
          user,
          reminders,
          token,
          recoverReminders,
          postReminder,
          logIn,
          signUp,
          deleteReminder, 
          logOut,
          editReminder,
          error
        }}
      >
        {children}
      </UserContext.Provider>
    );
}