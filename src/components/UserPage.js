import UserList from "./UserList";
import { useState, useEffect } from "react";

export default function UserPage(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlApiusers =
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";

    fetch(urlApiusers)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <UserList Users={users} />
    </div>
  );
}
