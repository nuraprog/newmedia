import { FC } from "react"
import Layout from "../components/base/layout"

interface MessagesProps {}

const Messages: FC<MessagesProps> = () => {
  return (
    <Layout title="Messages">
      <div>Messages</div>
    </Layout>
  )
}

export default Messages
