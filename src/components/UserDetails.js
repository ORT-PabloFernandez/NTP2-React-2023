import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetails = (props) => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlApiusers =
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";

    fetch(urlApiusers)
      .then((response) => response.json())
      .then((data) => setUser(data.find((user) => user["Object Id"] === id)));
  }, []);

  return (
    <div>
      <h3>Display name: {user["Display name"]}</h3>
      <h3>City: {user.City} </h3>
    </div>
  );
};

export default UserDetails;
