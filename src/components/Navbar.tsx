import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <Link to="/">Homepage</Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/createPost">Create Post</Link>
      )}
      {user && (
        <>
          <span className="username">{user?.displayName}</span>
          <img
            className="userPic"
            src={user?.photoURL || ""}
            alt="user_photo"
            width="20"
            height="20"
          />
          <button className="logoutBtn" onClick={signUserOut}>
            Log out
          </button>
        </>
      )}
    </div>
  );
};
