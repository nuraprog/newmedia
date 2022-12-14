import { useState, FC } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useAuth } from "../config/context/authContext"
import { useRouter } from "next/router"

interface JoinProps {}

const Join: FC<JoinProps> = () => {
  const { user, signUp } = useAuth()
  console.log(user)
  const { register, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      username: ""
    }
  })
  const { email, password } = getValues()
  const router = useRouter()

  async function signup(e: any) {
    e.preventDefault()
    console.log(getValues())

    try {
      console.log(email, password)
      await signUp(email, password)
      router.push("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-full h-screen flex items-start py-5 px-4 justify-center overflow-y-auto">
      <div className="bg-white dark:bg-black dark:border-[#111] rounded-xl border border-[#e5e5e5]">
        <div className="p-4 max-w-[467px] mx-auto flex flex-col gap-4">
          <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h3 className="text-gray-900 font-normal dark:text-[#eee]">Welcome!</h3>
            <p className="text-gray-500 dark:text-[#888]">It's the community where people post what they want.</p>
          </div>

          <form onSubmit={signup} className="p-2 text-gray-800 rounded-xl flex flex-col gap-3">
            {/* For errors */}
            <ul className="list-disc border border-red-400 rounded-md pl-6 py-2 bg-red-300">
              <div>
                <li>
                  <strong className="text-[#000]">item.value</strong>
                </li>
              </div>
            </ul>

            <div className="flex gap-2 items-center justify-between flex-col">
              <input
                className="rounded-md p-1 dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] text-gray-400 border w-full hover:bg-gray-50 duration-200 outline-none"
                type="text"
                placeholder="*Email"
                {...register("email", { required: true })}
              />
              <div className="flex flex-col gap-1 justify-between w-full">
                <input
                  className="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                  type="password"
                  placeholder="*Password (Min 8 characters)"
                  {...register("password", { required: true })}
                />
                <input
                  className="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                  type="password"
                  placeholder="*Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-1 justify-between w-full">
                <input
                  className="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                  type="text"
                  placeholder="*Name"
                  {...register("name", { required: true })}
                />
                <input
                  className="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                  type="text"
                  placeholder="*Nickname (Max 30 characters)"
                  {...register("username", { required: true })}
                />
              </div>
            </div>

            <div className="flex items-center flex-col gap-1">
              <button
                className="dark:bg-blue-800 dark:border-blue-900 w-full py-1 bg-blue-600 text-white hover:shadow-inner rounded-lg border"
                type="submit"
              >
                Sign Up
              </button>
              <Link href="/login">
                <button
                  className="dark:bg-[#111] font-bold dark:border-[#222] dark:hover:bg-[#060606] dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
                  type="button"
                >
                  Already have an Account?
                </button>
              </Link>

              <Link href="/">
                <button
                  className="dark:bg-[#111] dark:border-[#222] dark:hover:bg-[#060606] dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
                  type="button"
                >
                  Back to main page
                </button>
              </Link>
            </div>

            <div className="flex whitespace-nowrap gap-3 items-center justify-between">
              <hr className="w-full dark:bg-[#888]" />
              <p className="dark:text-[#888] text-gray-500">Or Continue with</p>
              <hr className="w-full dark:bg-[#888]" />
            </div>

            <div className="flex gap-1 justify-center">
              <button type="button">Google</button>
              <button type="button">Twitter</button>
              <button type="button">GitHub</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Join
