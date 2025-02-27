import { loadPosts } from '../../utils/load_posts';
import { Component } from 'react';
import './styles.css';
import { Post } from '../../components/posts/Posts';

export class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <Post posts = {posts}/>
      </section>
    );
  }
}