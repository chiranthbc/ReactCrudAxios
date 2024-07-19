import React from "react";

const Form = ({ handleOnChange, formData, handleSubmit }) => {
  return (
    <div>
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
          placeholder="enter email"
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
