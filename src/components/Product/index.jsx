import { ProductCard } from "../ProductCard";
import './styless.css';

export const Product = ({ posts, requestMethod }) => (
    <div className="posts">
        {posts.map(post => (
            <ProductCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                price={post.price}
                amount={post.amount}
                requestMethod={requestMethod}
            />
        ))}
    </div>
);