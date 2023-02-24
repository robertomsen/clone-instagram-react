import "./NavbarBottom.css";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import reels from "../../assets/reels.svg";
import messages from "../../assets/messages.svg";
import { Link } from "react-router-dom";

const URL_IMAGE_PROFILE_ICON =
  "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000";

const NavbarBottom = () => {
  return (
    <footer>
      <img src={home} />
      <Link to="/search">
        <img src={search} />
      </Link>
      <Link to="/reels">
        <img src={reels} />
      </Link>
      <Link to="/messages">
        <img src={messages} />
      </Link>
      <Link to="/profile">
        <img src={URL_IMAGE_PROFILE_ICON} id="profile_icon" />
      </Link>
    </footer>
  );
};

export default NavbarBottom;
