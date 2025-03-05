import { Post } from '../posts/Posts';
import { loadPosts } from '../../utils/load_posts';
import { Component } from 'react';

import './styless.css';

export class Profile extends Component {
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
        <h1>Perfil</h1>
      </section>
    );
  }
}