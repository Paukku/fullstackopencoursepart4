import { useState, useEffect } from "react";
import BlogForm from "./BlogForm";
import Blogs from "./Blogs";

function App() {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLike, setNewLike] = useState()


  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {title: newTitle, author: newAuthor, url:newUrl, like: 0}
    setBlogs(blogs.concat(blogObject))
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
    setNewLike(1)
    blogs.filter(blog => blog.like = blog.like + 1)
    
  }

  
  return (
    <div className="App">
      <BlogForm newTitle = {newTitle} newAuthor = {newAuthor} newUrl = {newUrl} addBlog = {addBlog} handleTitle = {handleTitle} handleAuthor = {handleAuthor} handleUrl = {handleUrl} />

      <Blogs blogs = {blogs} handleLikes={handleLikes} />
    </div>
  );
}

export default App;
