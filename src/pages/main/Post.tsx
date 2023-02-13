import { Post as IPost } from "./Main";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  return (
    <div className="postContainer">
      <h3 className="postTitle">{post.title}</h3>
      <p className="postDescription">{post.description}</p>
      <p className="postUsername">by: {post.username}</p>
    </div>
  );
};
