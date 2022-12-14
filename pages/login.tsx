import Link from "next/link"
import { useState, FC } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../config/context/authContext"

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { signin } = useAuth()
  const {
    register,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit"
  })

  const { email, password } = getValues()

  async function login(event: any) {
    event.preventDefault()

    try {
      console.log(email, password)
      await signin(email, password)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="login-background absolute z-50 top-0 left-0 w-full h-full flex items-start py-5 px-4 justify-center overflow-y-auto">
      <div className="backdrop-blur-xl dark:bg-zinc-900/70 dark:border drop-shadow-2xl dark:border-zinc-800 bg-[#fefefe] rounded-xl shadow-sm border border-[#e8e8e8]">
        <div className="p-4 max-w-[467px] mx-auto flex flex-col gap-4">
          <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h3 className="text-gray-900 dark:text-white font-normal">Welcome back!</h3>
            <p className="text-gray-500 dark:text-gray-400">Get back to the community where people post what they want.</p>
          </div>

          <ul className="list-disc border border-red-400 rounded-md pl-6 py-2 bg-red-300">
            <div>
              <li>
                <strong className="text-[#000]">Error</strong>
              </li>
            </div>
          </ul>

          <form
            onSubmit={login}
            className="p-2 drop-shadow-xl dark:bg-black/70 dark:text-gray-500 text-gray-800 rounded-xl bg-[#fefefe] border border-[#e8e8e8] flex flex-col gap-3"
          >
            <div className="flex gap-2 items-center justify-between md:flex-row flex-col">
              <input
                className="hover:dark:bg-zinc-900 rounded-md p-1 border w-full dark:text-gray-200 dark:placeholder-zinc-400 dark:border-zinc-700 bg-white/10 hover:bg-gray-50/20 duration-200 outline-none"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                className="hover:dark:bg-zinc-900 dark:text-gray-200 rounded-md dark:placeholder-zinc-400 dark:border-zinc-700 bg-white/10 hover:bg-gray-50/20 p-1 border w-full duration-200 outline-none"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>

            <div className="gap-2 md:gap-0 flex items-start sm:justify-between justify-start flex-col sm:flex-row">
              <label className="flex items-center gap-2 cursor-pointer" htmlFor="remember-me">
                <p>Remember me</p>
                <input type="checkbox" className="cursor-pointer" id="remember-me" />
              </label>
              <button type="button" className="hover:underline italic">
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center flex-col gap-1">
              <button
                className="dark:bg-blue-900 dark:border-blue-500 w-full py-1 bg-blue-600 text-white hover:shadow-inner rounded-lg border border-blue-600 shadow-blue-500 drop-shadow-xl"
                type="submit"
              >
                Login
              </button>
              <Link href="/join">
                <button
                  className="dark:bg-[#111] font-bold dark:border-[#222] dark:hover:bg-[#060606] dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
                  type="button"
                >
                  Create a new account
                </button>
              </Link>

              <button
                className="dark:bg-[#111] font-bold dark:border-[#222] dark:hover:bg-[#060606] dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
                type="button"
              >
                Back to main page
              </button>
            </div>

            <div className="flex whitespace-nowrap gap-3 items-center justify-between">
              <hr className="w-full dark:border-zinc-800" />
              <p className="text-gray-500 dark:text-zinc-600">Or Continue with</p>
              <hr className="w-full dark:border-zinc-800" />
            </div>

            <div className="flex gap-4 justify-center items-center">
              <button type="button" className="corner rounded-full w-10 h-10 flex items-center">
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>
              <button type="button" className="corner rounded-full w-10 h-10 flex items-center">
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </button>
              <button type="button" className="corner rounded-full w-10 h-10 flex items-center">
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
