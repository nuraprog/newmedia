import { useRouter } from "next/router"
import {FC} from "react"
import Layout from "../../components/base/layout"

interface CategoryByIDProps {

}

const CategoryByID: FC<CategoryByIDProps> = () => {
  const { id } = useRouter().query

  console.log(id)

  return (
    <Layout title={id?.toString()}>
      {id}
    </Layout>
  )
}

export default CategoryByID
