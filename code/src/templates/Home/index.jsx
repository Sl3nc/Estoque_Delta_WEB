import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { loadFirebase } from "../../utils/firebase_acess";
import { Post } from '../../components/posts/Posts';
import { loadPosts } from '../../utils/load_posts';
import { IconContext } from "react-icons";
import { Component } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './styles.css';

export class Home extends Component {
  state = {
    posts: []
  };

  async getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })

    const app = loadFirebase();
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
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