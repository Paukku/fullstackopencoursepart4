const BlogForm = ({ newTitle, newAuthor, newUrl, addBlog, handleTitle, handleAuthor, handleUrl }) => {
   
    return(
        <div>
            <h1>Add new blog</h1>

            <form onSubmit={addBlog}>
                Title <br />
                <input value={newTitle} onChange={handleTitle} /> <br />
                Author <br />
                <input value={newAuthor} onChange={handleAuthor} /> <br />
                URL <br />
                <input value={newUrl} onChange={handleUrl} /><br /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default BlogForm