import { Post } from '../../components/posts/Posts';
import { loadPosts } from '../../utils/load_posts';
import { Component } from 'react';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firestore";

import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";
import './styless.css';

export class Products extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }
  
  render() {
    const { posts } = this.state

    return (
      <>
        <header>
          <img src="./estoque_delta_hori.png" alt="logo" />
          <nav>
            <IconContext.Provider value={{ color: "#0597F2", size: "4em" }}>
              <FaCircleUser onClick={() => { console.log('oi') }} />
            </IconContext.Provider>
          </nav>
        </header>

        <section className='container'>
          <Post posts={posts} />
        </section>
      </>
    );
  }
}