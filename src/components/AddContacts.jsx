import React, { useState, store, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { id } = useParams();

  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
        AddContact()
        console.log(formData)
    } else {
      return
    }
    navigate("/");
  };

  const AddContact = () => {
    fetch("https://playground.4geeks.com/contact/agendas/juanma/contacts/", {
        method: "POST", 
        body: JSON.stringify(formData)
    })
    /*.then(res=> {
        window.location.href="/"
    })*/
  }



  return (
    <div className="container mt-4">
      <h2>{isEdit ? "Editar Contacto" : "Agregar Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Nombre Completo"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Email"
          required
          type="email"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Teléfono"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-control my-2"
          placeholder="Dirección"
          required
        />
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddContact;
