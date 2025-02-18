import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

const Nav = () => {
  const [citas, setCitas] = useState([]);

  const guardarCita = (data) => {
    setCitas((prevCitas) => [...prevCitas, data]);
  };

  return (
    <Router>
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link text-secondary fs-5">
              Listado
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agendar" className="nav-link text-secondary fs-5">
              Agendar
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<List citas={citas} />} />
          <Route path="/agendar" element={<Form guardarCita={guardarCita} />} />
        </Routes>
      </div>
    </Router>
  );
};

<div>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link">Listado</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Agendar</a>
    </li>
  </ul>
</div>;

export default Nav;
