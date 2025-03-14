import { History } from '../History';
import { history_firestore } from '../../utils/history_firestore';
import { useState, useCallback, useEffect } from 'react';

import './styless.css';

export const ProfilePost = ({ uid }) => {
  const [posts, setPosts] = useState([]);
  const [statusText, setStatusText] = useState('Carregando histórico...')

  const handleLoadPosts = useCallback(async () => {
    const history = await history_firestore(uid);
    console.log({ ...history });
    setPosts(history);
    setStatusText('Sem histórico de produtos comprados (～￣▽￣)～')
  }, [uid]);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return (
    <section className='container-profile'>
      <History posts={posts} />
      {posts.length === 0 && <h2 className='notFoundText'>{statusText}</h2>}
    </section>
  );
}