import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./Post";

export interface Post {
  id: string;
  userid: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const postsRef = collection(db, "posts");
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <div>
        {postsList?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
