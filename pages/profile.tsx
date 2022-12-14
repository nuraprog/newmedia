import { FC, useEffect, useState } from "react"
import Layout from "../components/base/layout"
import { BellIcon, CogIcon, DotsHorizontalIcon, GlobeAltIcon, MailIcon } from "@heroicons/react/solid"
import Link from "next/link"

// MUI
import { Modal } from "@mui/material"

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  // AllPosts and about
  const [checkboxValues, setCheckboxValues] = useState<string>("allposts")

  // Modal
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  }

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center gap-2">
          <div className="p-1 px-2 flex justify-between flex-col items-center gap-3 border rounded">
            <div className="flex gap-2 items-center flex-col">
              <img className="rounded-full w-32 h-32" src="https://pbs.twimg.com/profile_images/1405407482663612422/gIIsUWMH_400x400.jpg" alt="" />

              <div className="text-center">
                <h5>@Itscraftings</h5>
                <p>Bektur Bazarbayev</p>
              </div>
            </div>

            <div className="items-center flex-col flex gap-2">
              <div className="flex gap-2">
                <button type="button" className="btn corner py-1">
                  <BellIcon />
                </button>

                {true ? (
                  <button type="button" className="corner btn rounded-full px-4 font-bold shadow-xl">
                    Following
                  </button>
                ) : (
                  <button type="button" className="corner btn rounded-full px-4 font-bold shadow-xl">
                    Follow
                  </button>
                )}

                <Link href="/settings">
                  <a className="btn corner py-1">
                    <CogIcon />
                  </a>
                </Link>

                <button type="button" className="btn corner py-1" onClick={handleOpen}>
                  <DotsHorizontalIcon />
                </button>
              </div>
            </div>

            <div className="text-center flex flex-col items-center gap-2">
              <div className="bg-black/5 px-2 py-1 rounded flex gap-2">
                <button type="button" className="p-0">
                  <strong>10M</strong> Followers
                </button>
                <button type="button" className="p-0">
                  <strong>102</strong> Following
                </button>
              </div>
              <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rem!</p>
            </div>
          </div>

          {/* Switcher */}
          <div className="corner rounded flex gap-1 items-center justify-center p-1">
            <label
              onClick={() => setCheckboxValues("allposts")}
              className={`corner rounded px-1 cursor-pointer ${checkboxValues === "allposts" && "transition-100 pointer-events-none shadow-xl"}`}
              htmlFor="allposts"
            >
              <input className="hidden" type="radio" name="profile" id="allposts" />
              All Posts
            </label>
            <label
              onClick={() => setCheckboxValues("about")}
              className={`corner rounded px-1 cursor-pointer ${checkboxValues === "about" && "transition-100 pointer-events-none shadow-xl"}`}
              htmlFor="about"
            >
              <input className="hidden" type="radio" name="profile" id="about" />
              About
            </label>
          </div>

          {checkboxValues === "allposts" ? (
            <section></section>
          ) : (
            <div className="w-full">
              <div className="flex flex-col items-center justify-center p-2 gap-2 corner rounded w-full">
                <div className="bg-black/5 p-1 px-2 rounded">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque atque eveniet ea unde saepe aut mollitia quidem labore quasi
                    voluptatibus corporis non tenetur nisi nulla, deleniti libero eos autem dolorem perferendis perspiciatis. Fuga magnam,
                    necessitatibus sed omnis velit dolores deserunt minus tempore harum dicta doloribus accusantium at aliquam enim, in repellendus
                    unde possimus! Dolorum asperiores voluptatem eaque hic debitis error, vitae perspiciatis odit reprehenderit animi facere rem
                    exercitationem nisi porro quam cupiditate modi quo fugiat eligendi nemo tenetur possimus. Dolorem incidunt quaerat blanditiis
                    repudiandae odit commodi rerum veritatis tenetur quam est recusandae, obcaecati ex, assumenda dignissimos? Voluptatem aliquam
                    cumque in.
                  </p>
                </div>
                <div className="flex gap-2 w-full items-center overflow-x-auto">
                  <Link href="https://mywebsite.com">
                    <a className="hover:no-underline px-2  corner rounded flex gap-1 items-center">
                      <GlobeAltIcon />
                      <strong>Website</strong>
                    </a>
                  </Link>

                  <Link href="mailto:exampleemail@mail.com">
                    <a className="hover:no-underline items-center px-2 flex gap-2 corner rounded">
                      <MailIcon />
                      <strong>Email</strong>
                    </a>
                  </Link>

                  <Link href="https://twitter.com/itscraftings">
                    <a className="hover:no-underline items-center px-2 flex gap-2 corner rounded">
                      <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                      <strong>Twitter</strong>
                    </a>
                  </Link>
                </div>
                <div>
                  <p>Registration date: 05/11/2022</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="absolute top-[50%] left-[50%] shadow-2xl outline-none translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-xl p-1 bg-white">
          <div className="flex flex-col gap-1">
            <button className="btn px-2 py-1 rounded-lg" type="button">
              Block User
            </button>
            <hr />
            <button className="btn px-2 py-1 rounded-lg" type="button">
              Message
            </button>
            <hr />
            <button className="btn px-2 py-1 rounded-lg" type="button">
              Something
            </button>
            <hr />
            <button className="btn px-2 py-1 rounded-lg" type="button">
              Report
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Profile
