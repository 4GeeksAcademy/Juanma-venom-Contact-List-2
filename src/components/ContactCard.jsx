import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { initialStore } from "../store.js";


const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer()

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de eliminar este contacto?")) {
      actions.deleteContact(contact.id);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5>{contact.name}</h5>
          <p>Email: {contact.email}</p>
          <p>Teléfono: {contact.phone}</p>
          <p>Dirección: {contact.address}</p>
        </div>
        <div>
          <Link to={`/edit/${contact.id}`} className="btn btn-warning me-2">
            Editar
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
