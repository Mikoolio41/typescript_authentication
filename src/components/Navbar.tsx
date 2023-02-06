import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <Link to="/">Homepage</Link>
      <Link to="/login">Login</Link>
      <span className="username">{user?.displayName}</span>
      <img src={user?.photoURL || ""} alt="user_photo" width="20" height="20" />
    </div>
  );
};