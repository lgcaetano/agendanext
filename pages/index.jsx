
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { UserProvider } from '../contexts/UserContext'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

export default function Home({ signUp }) {

  
  const context = useContext(UserContext)

  const { isAuthenticated, user } = context

  const router = useRouter()

  console.log(isAuthenticated, user)

  if (isAuthenticated) 
    router.push("/dashboard")

  return (
      <Layout>
        <LoginForm signUpFlag={signUp}/>
      </Layout>
  );
}
