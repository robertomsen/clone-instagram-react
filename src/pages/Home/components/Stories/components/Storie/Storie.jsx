/* eslint-disable react/prop-types */
import "./Storie.css";

const Storie = ({ name, image, viewed }) => {
  return (
    <div
      className={!viewed ? `storie storie--notviewed` : `storie storie--viewed`}
    >
      <img src={image} />
      <p>{name}</p>
    </div>
  );
};

export default Storie;
