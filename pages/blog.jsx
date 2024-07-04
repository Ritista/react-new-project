import { Link, Outlet } from "react-router-dom"
const Blog = () => {
  return (
    <>
      <Link to="edit">Edit</Link>
      <Link to="singles">Edit</Link>
      <Outlet/>
    </>
  )
}

export default Blog
