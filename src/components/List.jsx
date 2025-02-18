import { useEffect } from "react";

const List = (props) => {
  const { citas } = props;

  useEffect(() => {}, [citas]);

  return (
    <div>
      <h4>Listado de citas:</h4>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {cita.name}, <strong>Prioridad:</strong>{" "}
            {cita.priority ? "Sí" : "No"}, <strong>Tipo:</strong> {cita.type},{" "}
            <strong>Fecha:</strong> {cita.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
