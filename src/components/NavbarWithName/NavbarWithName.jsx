import "./NavbarWithName.css";
import messages from "../../assets/messages.svg";
import back from "../../assets/back.svg";

const NavbarWithName = () => {
  return (
    <nav id="navbar__name">
      <img src={back} id="back" />
      <p>Comentarios</p>
      <img src={messages} />
    </nav>
  );
};

export default NavbarWithName;
