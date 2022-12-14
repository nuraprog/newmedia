import { useRouter } from "next/router"
import { FC } from "react"
import Layout from "../components/base/layout"

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const { query } = useRouter()

  return (
    <div>
      <Layout title={`Search: ${query.q}`}>
        <div>Search</div>
      </Layout>
    </div>
  )
}

export default Search
