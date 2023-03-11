const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


let blogs = [
  {
    id: 1,
    title: 'Blog 1',
    author: 'Author 1',
    url: 'http://URL1',
    like: 8
  },
  {
    id: 2,
    title: 'Blog 2',
    author: 'Author 2',
    url: 'http://URL2',
    like: 8
  },
  {
    id: 3,
    title: 'Blog 3',
    author: 'Author 3',
    url: 'http://URL3',
    like: 8
  },
  {
    id: 4,
    title: 'Blog 4',
    author: 'Author 4',
    url: 'http://URL4',
    like: 8
  },
]

const generateId = () => {
  const maxId = blogs.length > 0 
    ? Math.max(...blogs.map(b => b.id))
    : 0
  return maxId + 1
}
app.get ('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/blogs', (req, res) => {
  res.json(blogs)
})

app.get('/api/blogs/:id', (req, res) => {
  const id = Number(req.params.id)
  const blog = blogs.find(blog => blog.id === id)

  if(blog) {
    res.json(blog)
  } else {
    res.status(404).end()
  }
})

app.put('/api/blogs/:id', (req, res) => {
  const id = Number(req.params.id)
  const like = req.body.like
  console.log(like)
  const blog = blogs.find(blog => blog.id === id)
  
  if(blog) {
    blog.like = like
  } else {
    res.status(404).end()
  }

  res.json(blog)
})

app.post('/api/blogs', (req, res) => {
  const body = req.body

  if(!body.title || !body.author || !body.url){
    return res.status(400).json({
      error: 'Something missing'
    })
  }

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    like: body.like,
    id: generateId(),
  }

  blogs = blogs.concat(blog)

  res.json(blog)
})

const PORT = 3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)