import { useState, createContext } from "react"
import ILayoutContext, { INavbarStates } from "../../types/LayoutContext"

export function ContextValues(): ILayoutContext {
  const [navbarStates, setNavbarStates] = useState<INavbarStates>({
    isSidebar: false
  })

  const navbarFuncs = {
    switchSidebar(val: boolean): void {
      setNavbarStates(prev => ({
        ...prev,
        isSidebar: val
      }))
    }
  }

  return { navbarFuncs, navbarStates }
}

const LayoutContext = createContext({} as ILayoutContext)

export default LayoutContext
