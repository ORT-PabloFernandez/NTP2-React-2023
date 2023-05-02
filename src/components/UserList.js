import "./UserList.css";
import User from "./User.js";

const UserList = (props) => {
  // Iterar por los usuarios
  return (
    <ul className="users-list">
      {props.Users.map((user) => {
        return (
          <User
            Username={user["Display name"]}
            Title={user.Title}
            Picture={user.Picture}
            Id={user["Object Id"]}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
