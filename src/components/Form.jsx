import { useState } from "react";

const Form = (props) => {
  const { guardarCita } = props;
  const [formData, setFormData] = useState({
    name: "",
    priority: false,
    type: 1,
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCita(formData);
    setFormData({
      name: "",
      priority: false,
      type: 1,
      date: "",
    });
  };

  /** captura name, value, type, checked del evento de todos los inputs
   * en copyData hace una opia de formData y en el segundo parametro
   * coge la clave name ya capturada y pregunta si el type de esta clave
   * es checkbox, de ser asi toma el checked (true, false), de lo contrario toma el value
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const copyData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(copyData);
  };

  return (
    <div className="d-flex justify-content-evenly m-auto w-75">
      <div className="formulario mt-2 mb-5">
        <form className="w-10" onSubmit={handleSubmit}>
          <h4>Agendar cita:</h4>
          <div className="mt-5">
            <h6 htmlFor="name" className="form-label">
              Nombre:
            </h6>
            <input
              className="form-control"
              placeholder="Nombre"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-check my-3">
            <span className="form-check-label fw-semibold">Prioritaria</span>
            <input
              className="form-check-input"
              name="priority"
              type="checkbox"
              value={formData.priority}
              id="prioridad"
              onChange={handleChange}
            />
          </div>
          <div className="form-floating my-3">
            <select
              className="form-select"
              id="type"
              name="type"
              onChange={handleChange}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label>Tipo de cita:</label>
          </div>
          <div className="my-3">
            <h6 htmlFor="date" className="form-label">
              Fecha:
            </h6>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="py-4 text-center">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
