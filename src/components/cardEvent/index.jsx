import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };
  console.log(props);
  return (
    <div className="mt-5">
      <div className="card" style={{ width: "18rem" }} onClick={handleDetail}>
        <img
          className="card-img-top"
          src={`https://res.cloudinary.com/drkoj1bvv/image/upload/v1663831144/${props.data.img}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.price}</p>
          <a className="btn btn-primary" onClick={props.handleDetail}>
            Detail Event using Parents
          </a>
        </div>
      </div>
    </div>
  );
}
