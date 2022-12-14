import { FC, useContext } from "react"
import Link from "next/link"
import { UserCircleIcon, ChatAlt2Icon, BellIcon, PlusIcon, MenuAlt4Icon } from "@heroicons/react/solid"
import LayoutContext from "./context"
import useWindowWidth from "../../hooks/useWindwWidth"
import { useRouter } from "next/router"
import { useAuth } from "../../config/context/authContext"

interface NavbarProps {
  title?: string
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  const { switchSidebar } = useContext(LayoutContext).navbarFuncs
  const width = useWindowWidth()
  const { asPath } = useRouter()
  const { user } = useAuth()

  const navbarLinks = [
    {
      name: "New",
      link: "new"
    },
    {
      name: "Messages",
      link: "messages"
    },
    {
      name: "Notifications",
      link: "notifications"
    }
  ]

  return (
    <nav
      style={{ gridColumn: "1/3" }}
      className="h-[44px] z-40 flex overflow-x-auto gap-2 justify-between items-center corner-b px-2 sticky top-0 w-full backdrop-blur-md bg-white/60"
    >
      {width < 768 && (
        <button
          onClick={() => switchSidebar(true)}
          type="button"
          className="border-none hover:bg-black/5 px-2 rounded hover:transition-all hover:duration-200"
        >
          <MenuAlt4Icon className="w-5 h-5" />
        </button>
      )}

      <div className="font-bold ">
        {title ? (
          <p className="text-xl bg-transparent">{title}</p>
        ) : (
          <a className="text-xl bg-transparent" title="Reload page" href="/">
            NewMedia
          </a>
        )}
      </div>

      <div className="flex gap-3">
        {user &&
          navbarLinks.map((link, index) => (
            <Link key={index} href={`${link.link}/`}>
              <a className={`btn border-none bg-black/5 ${asPath === `/${link.link}` && "focus"}`} title="New Post">
                {link.name === "New" && <PlusIcon />}
                {link.name === "Messages" && <ChatAlt2Icon />}
                {link.name === "Notifications" && <BellIcon />}
              </a>
            </Link>
          ))}

        {user ? (
          <Link href="/profile">
            <a className={`bg-none rounded-full border-none flex items-center ${asPath === "/profile" && "focus"}`} title="Go to Account page">
              <UserCircleIcon className="w-6 h-6" />
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a className={`border-none flex gap-2 items-center hover:bg-black/5 px-2 py-0.5 rounded-md ${asPath === "/profile" && "focus"}`} title="Go to Account page">
              Login
              <UserCircleIcon className="w-6 h-6" />
            </a>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
