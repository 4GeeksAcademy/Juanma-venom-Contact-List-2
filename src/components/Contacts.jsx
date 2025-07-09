import React, {useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { initialStore } from "../store.js";


const Contacts = () => {
  const { store, dispatch } = useGlobalReducer()
  const { contacts } = store

  const getContacts = ()=>{
    fetch("https://playground.4geeks.com/contact/agendas/juanma/contacts/")
    .then((resp)=> resp.json())
    .then((data)=> 
      dispatch ({type: "add_contacts", payload: data.contacts}) )
  }

 useEffect(getContacts,[])

  if (!contacts) return <div>Cargando contactos...</div>;
  
  return (
    <div>
      <h1>Contactos</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Agregar Contacto
      </Link>
      <div>
        {contacts.length === 0 ? (
          <p>No hay contactos</p>
        ) : (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
    </div>
  );
};

export default Contacts;
