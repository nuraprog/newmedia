import { useEffect, useState } from "react"

function useWindowWidth() {
  function getWindowDimensions() {
    return window.innerWidth
  }

  const [windowWidth, setWindowWidth] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowWidth
}

export default useWindowWidth
