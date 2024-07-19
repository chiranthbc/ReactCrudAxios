import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./Form";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/data/" + id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
      .put("http://localhost:8000/data/" + id, formData)
      .then((response) => {
        alert("Updated Successfully...");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating data:", error);
      });
  };

  return (
    <div className="container mx-auto p-6 bg-white showdow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Edit</h1>
      <Form
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Edit;
