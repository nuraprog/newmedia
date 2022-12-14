import { AppProps } from "next/app"
import { useEffect, useState } from "react"
import AuthContextProvider from "../config/context/authContext"
import { useRouter } from "next/router"
import ProtectedRoute from "../components/protectedRoute"
import { ThemeProvider } from "next-themes"
import "../styles/tailwind.css"

const excludeAuth: string[] = ["/", "/login", "/join", "/search"]

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <AuthContextProvider>
      <ThemeProvider storageKey="theme" defaultTheme="system" enableSystem attribute="class">
        {excludeAuth.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </ThemeProvider>
    </AuthContextProvider>
  )
}
