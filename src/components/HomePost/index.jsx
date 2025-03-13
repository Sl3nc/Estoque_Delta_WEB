import { Product } from '../Product';
import { loadPosts } from '../../utils/load_posts';
import { HeaderHome } from '../HeaderHome';

import { useState, useCallback, useEffect } from 'react';

import './styless.css';
import { products_firestore } from '../../utils/products_firestore';

export const HomePost = ({ uid }) => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [statusText, setStatusText] = useState('Carregando produtos...')

  const handleLoadPosts = useCallback(async () => {
    const products = await products_firestore();
    console.log({...products});
    setPosts(products);
    setStatusText('Sem produtos nesse tipo =(')

    // const postsAndPhotos = await loadPosts();
    // setPosts(postsAndPhotos);
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
        {filteredPosts.length === 0 && <h2 id='notFoundText'>{statusText}</h2>}
      </div>
    </section>
  );

}