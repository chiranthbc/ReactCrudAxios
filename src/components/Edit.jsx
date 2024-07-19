import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-gray-700 font-medium ">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleOnChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <label htmlFor="email" className="block text-gray-700 font-medium ">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleOnChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <label htmlFor="phone" className="block text-gray-700 font-medium ">
          Phone
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleOnChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
