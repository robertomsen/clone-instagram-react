import "./NavbarBottom.css";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import reels from "../../assets/reels.svg";
import messages from "../../assets/messages.svg";

const URL_IMAGE_PROFILE_ICON =
  "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000";

const NavbarBottom = ({ activeOptionMenu }) => {
  return (
    <footer>
      <img src={home} />
      <img src={search} />
      <img src={reels} />
      <img src={messages} />
      <img src={URL_IMAGE_PROFILE_ICON} id="profile_icon" />
    </footer>
  );
};

export default NavbarBottom;
