import React, {useState, useEffect} from 'react'
import '../../style/Profile/UserFeed.sass'
import Post from '../Home/Post'
import axios from 'axios'

import loading from '../../img/loading.gif'

const UserFeed = ({currUser}) => {
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        await axios
          .get(`/posts/profile/${currUser._id}`)
          .then((res) => {
            setPosts(res.data.data.reverse());
          })
          .catch((err) => console.log(err));
      }
      useEffect(() => {
        getPosts();
      }, []);
    return (
        <div className='UserFeed'>
            {posts.length ? (
            posts.map((post) => (
              <div className="post" key={post._id}>
                <Post post={post} getPosts={getPosts} />
              </div>
            ))
          ) : (
            <div className='loading'>
              <img className="loading-gif" src={loading} alt='loading information'/>
            </div>
          )}
        </div>
    )
}

export default UserFeed
