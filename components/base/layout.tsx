import { FC, ReactNode } from "react"
import Navbar from "./navbar"
import Sidebar, { SidebarPart } from "./sidebar"
import LayoutContext, { ContextValues } from "./context"

interface LayoutProps {
  children: ReactNode
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <LayoutContext.Provider value={ContextValues()}>
      <div className="min-w-[320px] h-screen w-screen max-w-[1280px] mx-auto overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <Sidebar />

        <div className="overflow-y-auto static">
          <Navbar title={title} />

          <section className="px-2 py-1 relative z-[0]">{children}</section>
        </div>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
