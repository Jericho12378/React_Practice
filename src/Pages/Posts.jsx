import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Posts = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState()
  const [searchId, setSearchId] =useState(id)

  function searchID(){
    fetchPosts(searchId)
  }

  async function fetchPosts(userId) {
    setLoading(true)
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
    );
    setPost(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  {/* {post.map(element => <div key={element.id}>{ element.title }</div>)} */}
  return(
    <>
        <div className="post__search">
            
                <button onClick={() => navigate('/')}>Back</button>
         
            
            <div className="post__seach--container">
                <label className="post__search--label">Search by Id</label>
                <input type="number" className="inputbar" 
                onChange={(event) => setSearchId(event.target.value)} 
                onKeyPress = {(event) => event.key === "Enter" && searchID()}/>
                <button onClick={() => searchID()}>Enter</button>
            </div>
        </div>
        {loading ?
        new Array (10).fill(0).map((_, index) => (
            <div className="post__wrapper" key={index}>
            <div className="post" >
                <div className="post__title">
                    <div className="post__title--skeleton"> </div>
                    </div>
                    <div className="post__body">
                        <p className="post__body--skeleton"></p>
                </div>
            </div>
            </div>
        ))
        :
        post.map((element, index) => (
            <div className="post__wrapper" key={index}>
            <div className="post">
                <div className="post__title"> {element.title}</div>
                <p className="post__body">{element.body}</p>
            </div>
            </div>
        ))
        }
    </>
  )
};

export default Posts;
 