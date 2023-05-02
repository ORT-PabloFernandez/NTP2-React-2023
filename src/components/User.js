import { useState } from "react";
import { Link } from "react-router-dom";

import "./User.css";

const User = (props) => {
  // esto es JSX, tiene los tags de HTML, pero no es HTML
  const [contador, setContador] = useState(0);

  // function HandlerClick_User(event) {
  //   setContador(contador + 1);
  // }

  return (
    <li className="user-item">
      <div className="card user-item__content">
        {/* <a href="#" onClick={HandlerClick_User}> */}
        <Link to={`/users/${props.Id}`}>
          <div className="user-item__image avatar">
            <img src={props.Picture} />
          </div>
          <div className="user-item__info">
            <h2>{props.Username}</h2>
            <h3>{props.Title}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default User;
