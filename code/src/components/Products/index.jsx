import { Post } from '../posts/Posts';
import { loadPosts } from '../../utils/load_posts';
import { Component } from 'react';

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
      <section className='container'>
        <Post posts={posts} />
      </section>
    );
  }
}