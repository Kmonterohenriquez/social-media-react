import React, {useState, useEffect} from 'react'
import '../../style/Profile/UserFeed.sass'
import Post from '../Home/Post'
import axios from 'axios'

const UserFeed = () => {
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        await axios
          .get("/posts/")
          .then((res) => {
            setPosts(res.data.data.reverse());
          })
          .catch((err) => console.log(err));
      }
      useEffect(() => {
        getPosts();
        console.log("Redered");
      }, []);
    return (
        <div className='UserFeed'>
            {posts.length ? (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} getPosts={getPosts} />
              </div>
            ))
          ) : (
            <h1 className='no-post'>No Post Found</h1>
          )}
        </div>
    )
}

export default UserFeed
