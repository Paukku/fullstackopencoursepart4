const Blogs = ({blogs, handleLikes}) => {
  return (
    <div>
        <h1>Blogs</h1>
        {blogs.map(bl =>
        <div key={bl.id}>
            <h2> {bl.title}</h2>
            <p>Author: {bl.author} <br />
            Url: <a href={bl.url} >Link</a> <br />
            Likes: {bl.like} <br />
            <button type="submit"  onClick={() => handleLikes(bl.id)}> Like!</button>
            </p>
        </div>)}
    </div>
)}

export default Blogs