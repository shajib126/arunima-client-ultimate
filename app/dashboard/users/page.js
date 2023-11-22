
import IsAuth from '@/middleware/IsAuth'
import Layout from '../Layout'


const page = () => {
 
  return (
    <Layout>
      <IsAuth>
        <h1>Users</h1>
        </IsAuth>
    </Layout>
  )
}

export default page