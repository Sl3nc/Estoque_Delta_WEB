import { ProductCard } from "../ProductCard";
import './styless.css';

export const Product = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <ProductCard
                key={post.id}
                cover={'./logo192.png'}
                title={post.title}
                body={post.body}
            />
        ))}
    </div>
);