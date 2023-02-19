import "./NavbarTop.css";
import logo from "../../assets/logo.svg";
import heart from "../../assets/heart.svg";
import messages from "../../assets/messages.svg";
import add from "../../assets/add.svg";
const NavbarTop = () => {
  return (
    <nav>
      <img src={logo} id="navbar--logo" />
      <div id="right_buttons">
        <img src={add} />
        <img src={heart} />
        <img src={messages} />
      </div>
    </nav>
  );
};

export default NavbarTop;
