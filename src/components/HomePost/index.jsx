import { Product } from '../Product';
import { loadPosts } from '../../utils/load_posts';
import { useState, useCallback, useEffect } from 'react';

import './styless.css';
import { HeaderHome } from '../HeaderHome';

export const HomePost = ({ uid }) => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async () => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  const handleChange = (value) => setSearchValue(value);

  const filteredPosts = searchValue
    ? posts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;

  return (
    <section className='container-home'>
      <HeaderHome searchValue={searchValue} handleChange={handleChange} />
      <div className='container-posts'>
        {filteredPosts.length > 0 && <Product posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h2 id='notFoundText'>Sem produtos nesse tipo =(</h2>}
      </div>
    </section>
  );

}