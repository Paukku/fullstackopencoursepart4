const Blogs = ({blogs, handleLikes}) => {
    return (
        
        <ul>
            <h1>Blogs</h1>
                {blogs.map(bl =>
                <div key={bl.title}>
                   <h2> {bl.title}</h2>
                    <p>Author: {bl.author} <br />
                    Url: {bl.url} <br />
                    Likes: {bl.like} <br />
                    <button type="submit" value={bl.title} onClick={handleLikes}> Like!</button>
                    </p>
                </div>)}
        </ul>
)}

export default Blogs