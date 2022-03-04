
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { UserProvider } from '../contexts/UserContext'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

export default function Home() {

  
  const context = useContext(UserContext)
  console.log(context)

  const { isAuthenticated } = context

  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, [isAuthenticated]);


  return (
      <Layout>
        <LoginForm />
      </Layout>
  );
}
