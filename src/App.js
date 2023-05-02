import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
