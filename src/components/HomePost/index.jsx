import { Product } from '../Product';
import { loadPosts } from '../../utils/load_posts';
import { useState, useCallback, useEffect } from 'react';

import './styless.css';
import { HeaderHome } from '../HeaderHome';

export const HomePost = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);


  // async componentDidMount() {
  //   const postsAndPhotos = await loadPosts();
  //   this.setState({ posts: postsAndPhotos })
  // }

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;


  return (
    <section className='container-home'>
        <HeaderHome />
      <div className='container-posts'>
      <Product posts={posts} />
      </div>
    </section>
  );

}