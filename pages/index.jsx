
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { UserProvider } from '../contexts/UserContext'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useRouter } from 'next/router'

export default function Home() {

  
  const { isAuthenticated } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, [isAuthenticated]);


  return (
    <UserProvider>
      <Layout>
        <LoginForm />
      </Layout>
    </UserProvider>
  );
}
