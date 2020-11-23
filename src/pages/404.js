import { navigate } from "gatsby"
import { useEffect } from "react"

const NotFoundPage = () => {
  useEffect(() => {
    if (window !== "undefined") navigate("/")
  }, [])
  return null
}

export default NotFoundPage
