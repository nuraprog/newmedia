import { useRouter } from "next/router"
import { FC, ReactNode, useEffect, useLayoutEffect } from "react"
import { useAuth } from "../config/context/authContext"

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()

  useLayoutEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
