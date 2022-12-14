import { FC, ReactNode, useContext, useState } from "react"
import Link from "next/link"
import {
  HomeIcon,
  FireIcon,
  ChipIcon,
  CubeTransparentIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
  CollectionIcon,
  XIcon,
  SearchIcon,
  PlusIcon,
  ChatAlt2Icon,
  BellIcon,
  CogIcon,
  BookmarkIcon
} from "@heroicons/react/solid"
import { useRouter } from "next/router"
import LayoutContext from "./context"
import useWindowWidth from "../../hooks/useWindwWidth"

interface SidebarProps {}

interface SidebarPartProps {
  title: string
  children: ReactNode
}

export const SidebarPart: FC<SidebarPartProps> = ({ children, title }) => {
  return (
    <div className="translate-x-[200%] left z-50 fixed corner p-2 h-screen overflow-y-auto w-auto">
      <div>
        <h6>{title}</h6>
      </div>
      <div>{children}</div>
    </div>
  )
}

const Sidebar: FC<SidebarProps> = () => {
  const [isSidebarPart, setSidebarPart] = useState<boolean>(true)

  const [searchInputField, setSearchInputField] = useState<string>("")

  const { isSidebar } = useContext(LayoutContext).navbarStates
  const { switchSidebar } = useContext(LayoutContext).navbarFuncs

  const router = useRouter()
  const width = useWindowWidth()

  console.log(router.pathname, router.query.id)

  const links = [
    {
      name: "Home",
      link: ""
    },
    {
      name: "Popular",
      link: "category/popular"
    },
    {
      name: "Technology",
      link: "category/technology"
    },
    {
      name: "Science",
      link: "category/science"
    },
    {
      name: "Travel",
      link: "category/travel"
    },
    {
      name: "History",
      link: "category/history"
    },
    { link: "BREAK" },
    {
      name: "Explore",
      link: "category/"
    },
    {
      link: "BREAK"
    },
    {
      name: "Bookmarks",
      link: "bookmarks/"
    }
  ]

  function gotoSearch(): void {
    if (searchInputField) {
      router.push({ pathname: "/search", query: { q: searchInputField } })
    }
  }

  return (
    <div>
      <div
        className={`${isSidebar ? "left-[0%]" : "left-[-100%]"} duration-150 backdrop-blur-md bg-white/60 z-40 md:static fixed corner-r ${
          width < 768 && "pt-0"
        } p-2 h-screen flex-col flex justify-between gap-2 overflow-y-auto w-auto`}
      >
        <main>
          {width < 768 && (
            <div className="px-0.5 flex items-center gap-2 h-[44px]">
              <button
                type="button"
                className="btn bg-transparent border-none hover:bg-black/5 px-2 py-0.5 rounded hover:transition-all hover:duration-200"
                onClick={() => switchSidebar(false)}
              >
                <XIcon />
              </button>

              <strong>Menu</strong>
            </div>
          )}

          <div className="pt-1 flex flex-col gap-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
              <input
                value={searchInputField}
                onChange={e => setSearchInputField(e.currentTarget.value)}
                onKeyDown={e => e.key === "Enter" && gotoSearch()}
                type="search"
                name="q"
                className="pl-7"
                placeholder="Search"
              />
            </div>

            <div className="flex flex-col gap-1">
              {links.map((link, index) => (
                <>
                  {link.link !== "BREAK" ? (
                    <Link key={index} href={`/${link.link}`}>
                      <a
                        id={link.link}
                        className={`btn ${
                          router.pathname === `/${link.link}` || router.query.id === link.link.replace("category/", "") ? "focus" : ""
                        }`}
                      >
                        {link.name === "Home" && <HomeIcon />}
                        {link.name === "Popular" && <FireIcon />}
                        {link.name === "Technology" && <ChipIcon />}
                        {link.name === "Science" && <CubeTransparentIcon />}
                        {link.name === "Travel" && <PaperAirplaneIcon />}
                        {link.name === "History" && <BookOpenIcon />}
                        {link.name === "Explore" && <CollectionIcon />}
                        {link.name === "Bookmarks" && <BookmarkIcon />}
                        {link.name}
                      </a>
                    </Link>
                  ) : (
                    <hr />
                  )}
                </>
              ))}
            </div>

            {width < 768 && (
              <>
                <hr />
                <div className="flex flex-col gap-1">
                  <button type="button" className="btn" title="New Post">
                    <PlusIcon />

                    <p>Create Post</p>
                  </button>

                  <button type="button" className="btn" title="Messages">
                    <ChatAlt2Icon />

                    <p>Messages</p>
                  </button>
                  <button type="button" className="btn" title="Notifications">
                    <BellIcon />

                    <p>Notifications</p>
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Sidebar
