import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const Form = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("please enter a title"),
    description: yup.string().required("please enter a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      //   title: data.title,
      //   desciption: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };
  return (
    <form className="postForm" onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="title" {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder="description" {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input className="submitBtn" type="submit" />
    </form>
  );
};
