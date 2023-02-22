import { useState, useEffect } from "react"
import axios from 'axios'
import BlogForm from "./components/BlogForm"
import Blogs from "./components/Blogs"

function App() {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const hook = () => {
    axios
    .get('http://localhost:3001/blogs')
    .then(response => {
      setBlogs(response.data)
    })
  }
  
  useEffect(hook, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {title: newTitle, author: newAuthor, url:newUrl, like: 0}
    setBlogs(blogs.concat(blogObject))
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
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

  const handleLikes = (event) => {
    console.log(event.target.value) 
  }

  
  return (
    <div className="App">
      <BlogForm newTitle = {newTitle} newAuthor = {newAuthor} newUrl = {newUrl} addBlog = {addBlog} handleTitle = {handleTitle} handleAuthor = {handleAuthor} handleUrl = {handleUrl} />
      <Blogs blogs = {blogs} handleLikes={handleLikes} />
    </div>
  );
}

export default App;
