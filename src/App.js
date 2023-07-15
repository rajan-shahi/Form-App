import logo from "./logo.svg";
import "./App.css";
import Form from "./form/Form";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setposts] = useState();

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setposts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div>
      <Form />

      {/* {posts && (
        <div class="wrapper">
          <div class="card text-center">
            <div class="card-header">{posts[0].id}</div>
            <div class="card-body">
              <h5 class="card-title">{posts[0].title}</h5>
              <p class="card-text">{posts[0].body}</p>
            </div>
          </div>
        </div>
      )} */}

      {posts &&
        posts.map((post) => (
          <div  class="wrapper">
            <div class="card text-center">
              <div class="card-header">{post.id}</div>
              <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
