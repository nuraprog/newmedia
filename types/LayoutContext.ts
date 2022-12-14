export type INavbarFuncs = {
  switchSidebar: (val: boolean) => void
}

export type INavbarStates = {
  isSidebar: boolean
}

export default interface ILayoutContext {
  navbarFuncs: INavbarFuncs
  navbarStates: INavbarStates
}
