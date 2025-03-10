import { Product } from '../Product';
import { loadPosts } from '../../utils/load_posts';
import { Component } from 'react';

import './styless.css';

export class Service extends Component {
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
        <Product posts={posts} />
      </section>
    );
  }
}