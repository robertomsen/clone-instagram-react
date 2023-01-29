/* eslint-disable react/prop-types */
import "./Publication.css";
import comment from "../../../../assets/comment.svg";
import heart from "../../../../assets/heart.svg";
import messages from "../../../../assets/messages.svg";
import save from "../../../../assets/save.svg";

const Publication = ({ data }) => {
  console.log(data);
  return (
    <div className="publication">
      <div className="publication__bar">
        <img src={data.profile.image} />
        <p>{data.profile.name}</p>
      </div>
      <div className="publication__image">
        <img src={data.image} />
      </div>
      <div className="publication__actions">
        <img src={heart} />
        <img src={comment} />
        <img src={messages} />
        <div className="publication__actions--save">
          <img src={save} />
        </div>
      </div>
      <p className="publication__likes">{`${data.likes} Me gusta`}</p>
      <div className="publication__title">
        <p className="publication__title--profile">
          {`${data.profile.name}`}&nbsp;
        </p>
        <p>{data.title}</p>
      </div>
      <p className="publication__comments">{`Ver los ${data.comments.length} comentarios`}</p>
    </div>
  );
};

export default Publication;
