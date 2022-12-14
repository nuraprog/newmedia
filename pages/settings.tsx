import { FC, useState, useEffect } from "react"
import Layout from "../components/base/layout"
import { XIcon, CheckIcon, ShieldCheckIcon, BellIcon, LinkIcon, UserIcon, AdjustmentsIcon, PlusIcon } from "@heroicons/react/solid"
import { useForm } from "react-hook-form"
import Link from "next/link"

interface SettingsProps {}

interface generalData {
  username: string
  name: string
  location: string
  website: string
  bio: string
}

const ProfilePage: FC<SettingsProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm<generalData>({
    defaultValues: {
      bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum blanditiis fugit amet natus. Cupiditate in repudiandae esse temporibus expedita consequuntur nam eius aliquam suscipit. Minus, illum. Quaerat reiciendis sit repudiandae itaque ex, omnis, tempora quidem veritatis voluptas minus accusamus. Magni reprehenderit architecto quod vel aperiam corporis nam natus libero necessitatibus delectus quibusdam, laboriosam pariatur, veniam ex accusantium harum impedit laborum earum eius fuga id nisi. Beatae impedit quos omnis neque, pariatur enim quod blanditiis libero ipsum odit dolor modi amet illum voluptatem incidunt voluptas nisi doloremque ab dolorum aliquid aspernatur numquam praesentium? Optio fugiat sit totam labore saepe debitis?",
      location: "Osh, Kyrgyzstan",
      name: "Bektur Bazarbayev",
      username: "itscraftings",
      website: "https://website.com"
    },
    mode: "onSubmit"
  })

  function onSubmit(data: any) {
    console.log(data)
    console.log(dirtyFields)

    console.log(Object.values(dirtyFields))
  }

  return (
    <div className="corner rounded-md p-2 px-3">
      <form className="flex flex-col gap-3 w-[50%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-2">
          <img className="rounded-full w-32 h-32" src="https://pbs.twimg.com/profile_images/1405407482663612422/gIIsUWMH_400x400.jpg" alt="" />

          <button type="button">Change photo</button>
        </div>

        <div className="flex flex-col">
          <strong>Username</strong>
          <input placeholder="Username" {...register("username", { required: true, min: 2, max: 18 })} />
        </div>

        <div className="flex flex-col">
          <strong>Full name</strong>
          <input placeholder="Full Name" {...register("name", { required: true, min: 1 })} />
        </div>

        <div className="flex flex-col">
          <strong>Location</strong>
          <input placeholder="Location" {...register("location", { required: true })} />
        </div>

        <div className="flex flex-col">
          <strong>Website</strong>
          <input placeholder="Website" {...register("website", { required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/ })} />
        </div>

        <div className="flex flex-col">
          <strong>Bio</strong>
          <textarea
            placeholder="Bio *Minimum 300 characters"
            className="corner w-full px-1 outline-none rounded min-h-[300px]"
            {...register("bio", { required: true })}
          />
        </div>

        {errors.name && <span>This field is required</span>}

        <div className="flex gap-2 items-center">
          <button type="submit" className="shadow-sm btn items-center corner">
            <CheckIcon />
            Save
          </button>
          <button type="submit" className="shadow-sm btn items-center corner">
            <XIcon />
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

const GeneralPage: FC<SettingsProps> = () => {
  type form = {
    email: string
  }

  const { register } = useForm<form>({
    defaultValues: {
      email: "itscraftings@gmail.com"
    }
  })

  return (
    <div className="corner rounded-md p-2 px-3">
      <form className="flex flex-col gap-3 w-[50%]">
        <div className="flex flex-col">
          <strong>Email and password</strong>
          <input placeholder="Email" {...register("email", { required: true })} />

          <div className="flex items-start">
            <Link href="/settings/change-password">
              <a className="mt-0.5">Change password</a>
            </Link>
          </div>
        </div>

        <div>
          <strong>Linked accounts</strong>

          <div className="flex gap-2 items-center">
            <button className="btn corner" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              Facebook
            </button>
            <button className="btn corner" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              Twitter
            </button>
            <button className="btn corner" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              Apple
            </button>
            <button className="btn corner" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              Google
            </button>
            <button className="btn corner" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <strong>Account deleting</strong>

          <p>
            You can{" "}
            <Link href="/settings/delete-account">
              <a className="text-red-800">delete your account</a>
            </Link>
            . You will have 30 days to recover
          </p>
        </div>
      </form>
    </div>
  )
}

const NotificationsPage: FC<SettingsProps> = () => {
  return (
    <div className="corner rounded-md p-2 px-3">
      <form className="flex flex-col gap-3">
        <div>
          <strong>Letters to mail</strong>

          <div className="flex flex-col gap-1">
            <label className="flex gap-1 items-center" htmlFor="answersToMyComment">
              <input type="checkbox" id="answersToMyComment" />
              Answers to my comment
            </label>

            <label className="flex gap-1 items-center" htmlFor="newMessages">
              <input type="checkbox" id="newMessages" />
              New Messages
            </label>

            <label className="flex gap-1 items-center" htmlFor="notifications">
              <input type="checkbox" id="notifications" />
              Notifications
            </label>

            <label className="flex gap-1 items-center" htmlFor="bestForWeek">
              <input type="checkbox" id="bestForWeek" />
              Best for week
            </label>
          </div>
        </div>

        <div>
          <strong>Notifications on website</strong>

          <div className="flex flex-col gap-1">
            <label className="flex gap-1 items-center" htmlFor="answersToMyComment1">
              <input type="checkbox" id="answersToMyComment1" />
              Answers to my comment
            </label>

            <label className="flex gap-1 items-center" htmlFor="mentionsInCommentsToPosts">
              <input type="checkbox" id="mentionsInCommentsToPosts" />
              Mentions in comments to posts
            </label>

            <label className="flex gap-1 items-center" htmlFor="newCommentsToPosts">
              <input type="checkbox" id="newCommentsToPosts" />
              New comments to posts
            </label>

            <label className="flex gap-1 items-center" htmlFor="newFollowers">
              <input type="checkbox" id="newFollowers" />
              New followers
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

const Settings: FC<SettingsProps> = () => {
  const pages: string[] = ["Profile", "General", "Notifications"]

  const [activePage, setActivePage] = useState<string>("Profile")

  return (
    <Layout title="Settings">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {pages.map((name, index) => (
            <button
              value={name}
              onClick={e => setActivePage(e.currentTarget.value)}
              key={index}
              className={`font-bold flex gap-2 items-center border-none rounded-none ${name === activePage && "btn-underlined"}`}
              type="button"
            >
              <AdjustmentsIcon />
              {name}
            </button>
          ))}
        </div>

        <hr />

        {activePage === "Profile" ? <ProfilePage /> : activePage === "General" ? <GeneralPage /> : <NotificationsPage />}
      </div>
    </Layout>
  )
}

export default Settings
