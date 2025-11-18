
import BlogAbout from '../../components/blogs/BlogAbout'
import BlogTopSection from '../../components/blogs/BlogTopSection'
import BlogsPage from './BlogPages'

const BlogMainPage = () => {
  return (
    <>
     <div>
      <BlogTopSection/>
      <BlogAbout/>
      <BlogsPage/>
     </div>
    </>
  )
}

export default BlogMainPage