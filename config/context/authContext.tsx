import { ReactNode, FC, createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signin(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    setUser(null)
    await signOut(auth)
  }

  return <AuthContext.Provider value={{ user, signin, signUp, logout }}>{loading ? null : children}</AuthContext.Provider>
}

export default AuthContextProvider
