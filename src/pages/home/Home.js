
import Post from "../../components/post/Post";
import { useFetch } from "../../hooks/useFetch";
export const Home = () => {
 const { posts:posts,error,isPending } = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div className="container">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {
        isPending && <h3>Loading...</h3>
       }
    </div>
  );
};
