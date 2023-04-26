import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlApiusers =
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";

    fetch(urlApiusers)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // const users = [
  //   {
  //     "Display Name": "Adele Vance",
  //     Title: "Retail Manager",
  //     Picture:
  //       "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/public/img/Adele%20Vance.jpg",
  //   },
  //   {
  //     "Display Name": "Alex Wilber",
  //     Title: "Marketing Assistant",
  //     Picture:
  //       "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/public/img/Alex%20Wilber.jpg",
  //   },
  // ];

  return (
    <div>
      <UserList Users={users} />
    </div>
  );
}

export default App;
