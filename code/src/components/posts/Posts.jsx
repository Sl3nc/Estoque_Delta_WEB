import { ProductCard } from "../ProductCard";

export const Post = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <ProductCard
                key={post.id}
                title={post.title}
                body={post.body}
            />
        ))}
    </div>
);