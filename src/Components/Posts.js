import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const AxiosPost = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://gorest.co.in/public/v2/posts"
      );
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Users id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user_id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default AxiosPost;