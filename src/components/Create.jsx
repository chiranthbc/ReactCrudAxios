import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/data", formData)
      .then((response) => {
        console.log(response.data);
        alert("Saved Sucessfully...");
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error posting data, error ");
      });
  };

  return (
    <div className="container mx-auto p-6 bg-white showdow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Create</h1>

      <Form
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Create;
