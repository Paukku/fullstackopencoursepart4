import { useState, useEffect } from "react"
import BlogForm from "./components/BlogForm"
import Blogs from "./components/Blogs"
import blogService from './services/BlogService'

function App() {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const hook = () => {
    blogService
    .getAll()
    .then(initialBlogs => {
      setBlogs(initialBlogs)
    })
  }
  
  useEffect(hook, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {title: newTitle, author: newAuthor, url:newUrl, like: 0}

    blogService
    .create(blogObject)
    .then(initialBlogs => {
      setBlogs(blogs.concat(initialBlogs ))
      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
    })
  }

  const handleTitle = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthor = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrl = (event) => {
    setNewUrl(event.target.value)
  }

  const handleLikes = (id) => {
    const blog = blogs.find(bl => bl.id === id)
    const changeLike = { ...blog, like: blog.like +1 }

    blogService.update(id, changeLike).then(response => {
      setBlogs(blogs.map(blog => blog.id !== id ? blog : response))
    })
  }

  
  return (
    <div className="App">
      <BlogForm newTitle = {newTitle} newAuthor = {newAuthor} newUrl = {newUrl} addBlog = {addBlog} handleTitle = {handleTitle} handleAuthor = {handleAuthor} handleUrl = {handleUrl} />
      <Blogs blogs = {blogs} handleLikes={handleLikes} />
    </div>
  );
}

export default App;
